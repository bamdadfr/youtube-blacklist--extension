import {BlacklistInterface} from '../common/blacklist';
import {Browser} from './browser';
import StorageChange = chrome.storage.StorageChange;

export interface StateType {
  shouldReload: boolean;
  blacklist: BlacklistInterface;
}

export enum StateKeys {
  shouldReload = 'shouldReload',
  blacklist = 'blacklist',
}

const defaultState = {
  shouldReload: false,
  blacklist: {},
};

/**
 * State utilities
 */
export class State {
  public static async initialize(): Promise<void> {
    const state = await State.get();

    if (typeof state.shouldReload === 'undefined') {
      await this.set(StateKeys.shouldReload, defaultState.shouldReload);
    }

    if (typeof state.blacklist === 'undefined') {
      await this.set(StateKeys.blacklist, defaultState.blacklist);
    }
  }

  public static async set(action: StateKeys, payload: boolean | BlacklistInterface): Promise<void> {
    const browser = Browser.get();

    switch (action) {
      case StateKeys.shouldReload:
        await browser.storage.local.set({shouldReload: payload});
        break;

      case StateKeys.blacklist:
        await browser.storage.local.set({blacklist: payload});
        break;

      default:
        throw new Error('Invalid state type');
    }
  }

  public static get(): Promise<StateType> {
    const browser = Browser.get();

    if (typeof browser?.storage?.local?.get === 'undefined') {
      throw new Error('State: browser storage is not available');
    }

    return new Promise((resolve) => {
      browser.storage.local.get(
        null,
        async (state: StateType) => {
          resolve(state);
        },
      );
    });
  }

  public static onNew(listener: (newState: StorageChange | StateType) => void): void {
    const browser = Browser.get();
    if (!browser.storage.onChanged.hasListener(listener)) {
      browser.storage.onChanged.addListener(listener);
    }
  }
}

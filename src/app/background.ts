import {Browser} from './utils/browser';
import {State, StateKeys} from './utils/state';

/**
 * The background script entry point.
 */
export async function background(): Promise<void> {
  const browser = Browser.get();

  browser.storage.onChanged.addListener(async (changes) => {
    if (changes.shouldReload?.newValue === true) {
      await State.set(StateKeys.shouldReload, false);
      await browser.tabs.reload();
    }
  });
}

background().then();

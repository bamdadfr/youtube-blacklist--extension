import {getBrowser} from './get-browser';
import {updateGist} from './update-gist';
import {isSyncEnabled} from './is-sync-enabled';

export const BLACKLIST = 'blacklist';
export const SHOULD_RELOAD = 'shouldReload';
export const CURRENT_PAGE = 'currentPage';
export const GIST_TOKEN = 'gistToken';
export const GIST_ID = 'gistId';
export const GIST_DATE = 'gistDate';

/**
 * @param {string} type action type
 * @param {*} payload action payload
 * @returns {void}
 */
export async function setState(type, payload) {
  const browser = getBrowser();

  switch (type) {
    case BLACKLIST: {
      const obj = Object.create(null);
      obj[BLACKLIST] = payload;
      await browser.storage.local.set(obj);
      if (isSyncEnabled()) {
        await updateGist();
      }
      return;
    }

    case SHOULD_RELOAD: {
      const obj = Object.create(null);
      obj[SHOULD_RELOAD] = payload;
      await browser.storage.local.set(obj);
      return;
    }

    case CURRENT_PAGE: {
      const obj = Object.create(null);
      obj[CURRENT_PAGE] = payload;
      await browser.storage.local.set(obj);
      return;
    }

    case GIST_TOKEN: {
      const obj = Object.create(null);
      obj[GIST_TOKEN] = payload;
      await browser.storage.local.set(obj);
      return;
    }

    case GIST_ID: {
      const obj = Object.create(null);
      obj[GIST_ID] = payload;
      await browser.storage.local.set(obj);
      return;
    }

    case GIST_DATE: {
      const obj = Object.create(null);
      obj[GIST_DATE] = payload;
      await browser.storage.local.set(obj);
      return;
    }

    default: {
      throw new Error('Invalid action type');
    }
  }
}

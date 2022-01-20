import {getBrowser} from './get-browser';

export const BLACKLIST = 'blacklist';
export const SHOULD_RELOAD = 'shouldReload';
export const CURRENT_PAGE = 'currentPage';
export const GIST_AUTH = 'gistAuth';
export const GIST_URL = 'gistUrl';

/**
 * @param {string} type action type
 * @param {*} payload action payload
 * @returns {*} browser storage local set action
 */
export async function setState(type, payload) {
  const browser = getBrowser();

  switch (type) {
    case BLACKLIST: {
      const obj = Object.create(null);
      obj[BLACKLIST] = payload;
      return await browser.storage.local.set(obj);
    }

    case SHOULD_RELOAD: {
      const obj = Object.create(null);
      obj[SHOULD_RELOAD] = payload;
      return await browser.storage.local.set(obj);
    }

    case CURRENT_PAGE: {
      const obj = Object.create(null);
      obj[CURRENT_PAGE] = payload;
      return await browser.storage.local.set(obj);
    }

    case GIST_AUTH: {
      const obj = Object.create(null);
      obj[GIST_AUTH] = payload;
      return await browser.storage.local.set(obj);
    }

    case GIST_URL: {
      const obj = Object.create(null);
      obj[GIST_URL] = payload;
      return await browser.storage.local.set(obj);
    }

    default: {
      throw new Error('state error');
    }
  }
}

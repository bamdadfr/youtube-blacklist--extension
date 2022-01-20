import {getState} from './get-state';
import {
  BLACKLIST,
  CURRENT_PAGE,
  GIST_DATE,
  GIST_ID,
  GIST_TOKEN,
  setState,
  SHOULD_RELOAD,
} from './set-state';

/**
 *
 */
export async function initializeState() {
  const state = await getState();

  if (typeof state[SHOULD_RELOAD] === 'undefined') {
    await setState(SHOULD_RELOAD, false);
  }

  if (typeof state[BLACKLIST] === 'undefined') {
    await setState(BLACKLIST, {});
  }

  if (typeof state[CURRENT_PAGE] === 'undefined') {
    await setState(CURRENT_PAGE, null);
  }

  if (typeof state[GIST_TOKEN] === 'undefined') {
    await setState(GIST_TOKEN, null);
  }

  if (typeof state[GIST_ID] === 'undefined') {
    await setState(GIST_ID, null);
  }

  if (typeof state[GIST_DATE] === 'undefined') {
    await setState(GIST_DATE, null);
  }
}

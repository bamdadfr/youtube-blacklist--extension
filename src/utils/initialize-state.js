import {getState} from './get-state';
import {
  BLACKLIST,
  CURRENT_PAGE,
  GIST_AUTH,
  GIST_URL,
  setState,
  SHOULD_RELOAD,
} from './set-state';

/**
 *
 */
export async function initializeState() {
  const state = await getState();

  if (typeof state.shouldReload === 'undefined') {
    await setState(SHOULD_RELOAD, false);
  }

  if (typeof state.blacklist === 'undefined') {
    await setState(BLACKLIST, {});
  }

  if (typeof state.currentPage === 'undefined') {
    await setState(CURRENT_PAGE, null);
  }

  if (typeof state.gistAuth === 'undefined') {
    await setState(GIST_AUTH, null);
  }

  if (typeof state.gistUrl === 'undefined') {
    await setState(GIST_URL, null);
  }
}

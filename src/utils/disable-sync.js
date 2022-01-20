import {GIST_DATE, GIST_ID, GIST_TOKEN, setState} from './set-state';
import {getState} from './get-state';

/**
 *
 */
export async function disableSync() {
  const state = await getState();
  await setState(GIST_TOKEN, null);
  await setState(GIST_ID, null);
  await setState(GIST_DATE, null);
}

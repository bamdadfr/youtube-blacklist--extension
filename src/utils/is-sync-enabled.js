import {getState} from './get-state';

/**
 * @returns {boolean} - True if sync is enabled, false otherwise.
 */
export async function isSyncEnabled() {
  const {gistToken, gistId} = await getState();
  if (gistToken !== null && gistId !== null) {
    return true;
  } else {
    return false;
  }
}

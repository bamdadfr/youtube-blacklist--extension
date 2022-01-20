import {getState} from './get-state';
import {GITHUB_API} from './constants';

/**
 *
 */
export async function isLocalBlacklistOutdated() {
  const {gistId, gistDate} = await getState();

  const request = await fetch(`https://${GITHUB_API}/gists/${gistId}`);
  const response = await request.json();
  const remoteDate = Date.parse(response.history[0].committed_at);

  // noinspection RedundantIfStatementJS
  if (remoteDate > gistDate) {
    // Local is outdated
    return true;
  } else {
    // Local is up-to-date
    return false;
  }
}

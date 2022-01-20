import {GITHUB_API, USER_AGENT} from './constants';
import {getState} from './get-state';

/**
 *
 */
export async function updateGist() {
  const state = await getState();
  await fetch(`https://${GITHUB_API}/gists/${state.gistId}`, {
    headers: {
      'Accept': 'application/vnd.github.v3+json',
      'Authorization': `token ${state.gistToken}`,
      'User-Agent': USER_AGENT,
    },
    method: 'PATCH',
    body: JSON.stringify({
      description: 'YouTube Blacklist Extension',
      public: false,
      files: {
        'blacklist.json': {
          content: JSON.stringify(state.blacklist || {}),
        },
      },
    }),
  });
}

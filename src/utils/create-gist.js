import {GITHUB_API, USER_AGENT} from './constants';
import {GIST_ID, GIST_TOKEN, setState} from './set-state';
import {getState} from './get-state';

/**
 * @param {string} token - GitHub personal access token with `gist` scope
 * @returns {string} - The ID of the new Gist.
 */
export async function createGist(token) {
  if (typeof token === 'undefined') {
    throw new Error('No token provided.');
  }

  await setState(GIST_TOKEN, token);

  const state = await getState();
  const request = await fetch(`https://${GITHUB_API}/gists`, {
    headers: {
      'Accept': 'application/vnd.github.v3+json',
      'Authorization': `token ${token}`,
      'User-Agent': USER_AGENT,
    },
    method: 'POST',
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

  if (request.status !== 201) {
    throw new Error('Failed to create gist');
  }

  const response = await request.json();

  const id = response.id;
  await setState(GIST_ID, id);
}

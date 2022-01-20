import {GIST_ID, GIST_TOKEN, setState} from './set-state';

/**
 * @param {string} token - Gist token
 * @param {string} id - Gist id
 */
export async function attachGist(token, id) {
  if (typeof token === 'undefined') {
    throw new Error('No token provided');
  }

  if (typeof id === 'undefined') {
    throw new Error('No gist id provided');
  }

  await setState(GIST_TOKEN, token);
  await setState(GIST_ID, id);
}

import {GITHUB_API} from './constants';

/**
 * @param id
 */
export async function readGist(id) {
  if (typeof id === 'undefined') {
    throw new Error('id is required');
  }

  const request = await fetch(`https://${GITHUB_API}/gists/${id}`);
}

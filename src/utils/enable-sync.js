import {createGist} from './create-gist';
import {attachGist} from './attach-gist';

/**
 * @param {string} token - Token provided by the user
 * @param {string} id - ID provided by the user
 */
export async function enableSync(token, id) {
  try {
    if (token !== '' && id === '') {
      await createGist(token);
    } else if (token !== '' && id !== '') {
      await attachGist(token, id);
    }
  } catch (err) {
    // eslint-disable-next-line no-alert
    alert(err);
  }
}

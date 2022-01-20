import {CHANNEL_BY_VIDEO_ID} from './constants';
import {promisify} from './promisify';

/**
 * @description scope: extension
 * @returns {object} data {video => channel}
 */
export async function getChannelByVideo() {
  return promisify(({resolve, retry}) => {
    const node = document.getElementById(CHANNEL_BY_VIDEO_ID);

    if (node === null) {
      return retry();
    }

    return resolve(JSON.parse(node.innerHTML));
  });
}

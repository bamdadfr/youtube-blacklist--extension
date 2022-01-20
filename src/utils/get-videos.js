import {getState} from './get-state';
import {promisify} from './promisify';

/**
 * @returns {Promise<HTMLCollection>} collection of thumbnails (youtube videoCompactRenderer)
 */
export async function getVideos() {
  return promisify(async ({resolve, retry}) => {
    const {currentPage} = await getState();
    let elements = undefined;

    if (currentPage === 'home') {
      elements = document.getElementsByTagName('ytd-rich-item-renderer');
    }

    if (currentPage === 'results') {
      elements = document.getElementsByTagName('ytd-video-renderer');
    }

    if (currentPage === 'watch') {
      elements = document.getElementsByTagName('ytd-compact-video-renderer');
    }

    if (elements) {
      return resolve(elements);
    }

    return retry();
  });
}

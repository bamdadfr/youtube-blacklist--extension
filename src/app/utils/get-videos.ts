import {Utils} from './utils';
import {PageUtils} from './page-utils';

export async function getVideos(): Promise<HTMLCollectionOf<HTMLElement>> {
  return Utils.promisify(async (resolve, retry) => {
    if (PageUtils.isHome) {
      return resolve(document.getElementsByTagName('ytd-rich-item-renderer'));
    }

    if (PageUtils.isSearch) {
      return resolve(document.getElementsByTagName('ytd-video-renderer'));
    }

    if (PageUtils.isWatch) {
      return resolve(document.getElementsByTagName('ytd-compact-video-renderer'));
    }

    return retry();
  });
}

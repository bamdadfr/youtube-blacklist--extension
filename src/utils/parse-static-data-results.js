import {parseRendererVideo} from './parse-renderer-video';
import {parseRendererShelf} from './parse-renderer-shelf';

/**
 * @description static data for /results
 *      scope: browser
 * @returns {object} mapping {video => channel}
 */
export function parseStaticDataResults() {
  let data = {};

  const {contents} = window
    ?.ytInitialData
    ?.contents
    ?.twoColumnSearchResultsRenderer
    ?.primaryContents
    ?.sectionListRenderer
    ?.contents
    ?.[0]
    ?.itemSectionRenderer || {};

  if (!contents) {
    return data;
  }

  contents.forEach((item) => {
    const {
      videoRenderer,
      shelfRenderer,
    } = item;

    if (
      !videoRenderer
            && !shelfRenderer
    ) {
      return;
    }

    if (videoRenderer) {
      data = {
        ...data,
        ...parseRendererVideo(videoRenderer),
      };
    }

    if (shelfRenderer) {
      data = {
        ...data,
        ...parseRendererShelf(shelfRenderer),
      };
    }
  });

  return data;
}

import {parseRendererVideo} from './parse-renderer-video';

/**
 * @description static data for /watch
 *      scope: browser
 * @returns {object} mapping {video => channel}
 */
export function parseStaticDataWatch() {
  let data = {};

  const {results} = window
    ?.ytInitialData
    ?.contents
    ?.twoColumnWatchNextResults
    ?.secondaryResults
    ?.secondaryResults || {};

  if (!results) {
    return data;
  }

  let contents = results; // data structure for logged out user

  if (Object.keys(results[1])[0] === 'itemSectionRenderer') {
    // data structure for logged in user
    contents = window
      ?.ytInitialData
      ?.contents
      ?.twoColumnWatchNextResults
      ?.secondaryResults
      ?.secondaryResults
      ?.results
      ?.[1]
      ?.itemSectionRenderer
      ?.contents;

    if (!contents) {
      return data;
    }
  }

  contents.forEach((item) => {
    const {compactVideoRenderer} = item;

    if (!compactVideoRenderer) {
      return;
    }

    data = {
      ...data,
      ...parseRendererVideo(compactVideoRenderer),
    };
  });

  return data;
}

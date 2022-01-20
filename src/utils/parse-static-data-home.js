import {parseRendererRichItem} from './parse-renderer-rich-item';
import {parseRendererRichSection} from './parse-renderer-rich-section';

/**
 * @description static data for /
 *      scope: browser
 * @returns {object} {video => channel}
 */
export function parseStaticDataHome() {
  let data = {};

  const {contents} = window
    ?.ytInitialData
    ?.contents
    ?.twoColumnBrowseResultsRenderer
    ?.tabs
    ?.[0]
    ?.tabRenderer
    ?.content
    ?.richGridRenderer || {};

  if (!contents) {
    return data;
  }

  contents.forEach((item) => {
    const {
      richItemRenderer,
      richSectionRenderer,
    } = item;

    if (
      !richItemRenderer
            && !richSectionRenderer
    ) {
      return;
    }

    if (richItemRenderer) {
      data = {
        ...data,
        ...parseRendererRichItem(richItemRenderer),
      };
    }

    if (richSectionRenderer) {
      data = {
        ...data,
        ...parseRendererRichSection(richSectionRenderer),
      };
    }
  });

  return data;
}

import {parseRendererRichItem} from './parse-renderer-rich-item';

/**
 * @param {object} renderer richSectionRenderer
 * @returns {object} mapping {video => channel}
 */
export function parseRendererRichSection(renderer) {
  let data = {};

  const {contents} = renderer
    ?.content
    ?.richShelfRenderer || {};

  if (!contents) {
    return data;
  }

  contents.forEach((item) => {
    const {richItemRenderer} = item;

    if (!richItemRenderer) {
      return;
    }

    data = {
      ...data,
      ...parseRendererRichItem(richItemRenderer),
    };
  });

  return data;
}

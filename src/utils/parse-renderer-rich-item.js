import { parseRendererVideo } from './parse-renderer-video'

/**
 * @param {object} renderer richItemRenderer
 * @returns {object} parseYoutubeVideoRenderer
 */
export function parseRendererRichItem (renderer) {

    const { videoRenderer } = renderer.content

    return parseRendererVideo (videoRenderer)

}
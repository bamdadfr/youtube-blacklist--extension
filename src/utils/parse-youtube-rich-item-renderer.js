import { parseYoutubeVideoRenderer } from './parse-youtube-video-renderer'

/**
 * @param {object} renderer richItemRenderer
 * @returns {object} parseYoutubeVideoRenderer
 */
export function parseYoutubeRichItemRenderer (renderer) {

    const { videoRenderer } = renderer.content

    return parseYoutubeVideoRenderer (videoRenderer)

}
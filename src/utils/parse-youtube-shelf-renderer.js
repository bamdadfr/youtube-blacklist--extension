import { parseYoutubeVideoRenderer } from './parse-youtube-video-renderer'

/**
 * @param {object} renderer shelfRenderer
 * @returns {object} mapping {video => channel}
 */
export function parseYoutubeShelfRenderer (renderer) {

    let data = {}
    const { verticalListRenderer } = renderer.content

    if (verticalListRenderer === undefined) return data

    const { items } = verticalListRenderer

    items.forEach ((item) => {

        const { videoRenderer } = item

        if (videoRenderer === undefined) return

        data = {
            ...data,
            ...parseYoutubeVideoRenderer (videoRenderer),
        }

    })

    return data

}
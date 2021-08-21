import { parseRendererVideo } from './parse-renderer-video'

/**
 * @param {object} renderer shelfRenderer
 * @returns {object} mapping {video => channel}
 */
export function parseRendererShelf (renderer) {

    let data = {}

    const { items } = renderer
        ?.content
        ?.verticalListRenderer || {}

    if (!items) return data

    items.forEach ((item) => {

        const { videoRenderer } = item

        if (!videoRenderer) return

        data = {
            ...data,
            ...parseRendererVideo (videoRenderer),
        }

    })

    return data

}
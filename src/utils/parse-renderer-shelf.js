import { parseRendererVideo } from './parse-renderer-video'

/**
 * @param {object} renderer shelfRenderer
 * @returns {object} mapping {video => channel}
 */
export function parseRendererShelf (renderer) {

    let data = {}
    const { verticalListRenderer } = renderer.content

    if (!verticalListRenderer) return data

    const { items } = verticalListRenderer

    items.forEach ((item) => {

        const { videoRenderer } = item

        if (videoRenderer === undefined) return

        data = {
            ...data,
            ...parseRendererVideo (videoRenderer),
        }

    })

    return data

}
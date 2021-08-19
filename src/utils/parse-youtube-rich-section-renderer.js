import { parseYoutubeRichItemRenderer } from './parse-youtube-rich-item-renderer'

/**
 * @param {object} renderer richSectionRenderer
 * @returns {object} mapping {video => channel}
 */
export function parseYoutubeRichSectionRenderer (renderer) {

    let data = {}
    const { richShelfRenderer } = renderer.content

    if (richShelfRenderer === undefined) return data

    const { contents } = richShelfRenderer

    contents.forEach ((content) => {

        const { richItemRenderer } = content

        if (richItemRenderer === undefined) return

        data = {
            ...data,
            ...parseYoutubeRichItemRenderer (richItemRenderer),
        }

    })

    return data

}
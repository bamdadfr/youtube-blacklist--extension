import { parseRendererRichItem } from './parse-renderer-rich-item'

/**
 * @param {object} renderer richSectionRenderer
 * @returns {object} mapping {video => channel}
 */
export function parseRendererRichSection (renderer) {

    let data = {}
    const { richShelfRenderer } = renderer.content

    if (richShelfRenderer === undefined) return data

    const { contents } = richShelfRenderer

    contents.forEach ((content) => {

        const { richItemRenderer } = content

        if (richItemRenderer === undefined) return

        data = {
            ...data,
            ...parseRendererRichItem (richItemRenderer),
        }

    })

    return data

}
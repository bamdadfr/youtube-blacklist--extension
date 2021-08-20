import { parseRendererRichItem } from './parse-renderer-rich-item'

/**
 * @param {object} renderer richSectionRenderer
 * @returns {object} mapping {video => channel}
 */
export function parseRendererRichSection (renderer) {

    let data = {}
    const { richShelfRenderer } = renderer.content

    if (!richShelfRenderer) return data

    const { contents } = richShelfRenderer

    contents.forEach ((item) => {

        const { richItemRenderer } = item

        if (richItemRenderer === undefined) return

        data = {
            ...data,
            ...parseRendererRichItem (richItemRenderer),
        }

    })

    return data

}
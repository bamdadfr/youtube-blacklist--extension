import { extractHomeItem } from './extract-home-item'

/**
 * @param element
 */
export function extractHomeSection (element) {

    if (typeof element.richSectionRenderer === 'undefined') return

    let object = {}
    const items = element.richSectionRenderer.content.richShelfRenderer.contents

    items.forEach ((item) => {

        object = {
            ...object,
            ...extractHomeItem (item),
        }

    })

    return object

}
import { parseRendererRichItem } from './parse-renderer-rich-item'
import { parseRendererRichSection } from './parse-renderer-rich-section'

/**
 * @description static data for /
 *      scope: browser
 * @returns {object} home static data
 */
export function parseStaticDataHome () {

    let data = {}
    const contents = window.ytInitialData.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.richGridRenderer.contents

    contents.forEach ((content) => {

        const {
            richItemRenderer,
            richSectionRenderer,
        } = content

        if (
            richItemRenderer === undefined
            && richSectionRenderer === undefined
        ) return

        if (richItemRenderer) {

            data = {
                ...data,
                ...parseRendererRichItem (richItemRenderer),
            }

        }

        if (richSectionRenderer) {

            data = {
                ...data,
                ...parseRendererRichSection (richSectionRenderer),
            }

        }
    
    })

    return data

}
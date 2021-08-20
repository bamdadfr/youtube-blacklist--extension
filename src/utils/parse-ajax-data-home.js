import { parseRendererRichItem } from './parse-renderer-rich-item'
import { parseRendererRichSection } from './parse-renderer-rich-section'

/**
 * @param {object} ajaxData from API
 * @returns {object} {video => channel}
 */
export function parseAjaxDataHome (ajaxData) {
    
    let data = {}

    const { contents } = ajaxData
        ?.contents
        ?.twoColumnBrowseResultsRenderer
        ?.tabs[0]
        ?.tabRenderer
        ?.content
        ?.richGridRenderer

    if (!contents) return data

    contents.forEach ((item) => {

        const {
            richItemRenderer,
            richSectionRenderer,
        } = item

        if (
            !richItemRenderer
            && !richSectionRenderer
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
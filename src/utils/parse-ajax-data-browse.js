import { parseRendererRichItem } from './parse-renderer-rich-item'
import { parseRendererRichSection } from './parse-renderer-rich-section'

/**
 * @param {object} ajaxData from API
 * @returns {object} {video => channel}
 */
export function parseAjaxDataBrowse (ajaxData) {
    
    let data = {}

    const { contents } = ajaxData
        ?.contents
        ?.twoColumnBrowseResultsRenderer
        ?.tabs
        ?.[0]
        ?.tabRenderer
        ?.content
        ?.richGridRenderer || {}

    if (contents) {

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
    
    }

    const { continuationItems } = ajaxData
        ?.onResponseReceivedActions
        ?.[0]
        ?.appendContinuationItemsAction || {}

    if (continuationItems) {

        continuationItems.forEach ((item) => {

            const { richItemRenderer } = item

            if (!richItemRenderer) return

            data = {
                ...data,
                ...parseRendererRichItem (richItemRenderer),
            }
        
        })
    
    }

    return data

}
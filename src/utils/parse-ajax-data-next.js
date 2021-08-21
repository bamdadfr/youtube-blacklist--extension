import { parseRendererVideo } from './parse-renderer-video'

/**
 * @param {object} ajaxData from API
 * @returns {object} {video => channel}
 */
export function parseAjaxDataNext (ajaxData) {

    let data = {}

    const { results } = ajaxData
        ?.contents
        ?.twoColumnWatchNextResults
        ?.secondaryResults
        ?.secondaryResults || {}
    
    if (results) {

        results.forEach ((item) => {

            const { compactVideoRenderer } = item

            if (!compactVideoRenderer) return

            data = {
                ...data,
                ...parseRendererVideo (compactVideoRenderer),
            }

        })
    
    }

    const { continuationItems } = ajaxData
        ?.onResponseReceivedEndpoints
        ?.[0]
        ?.appendContinuationItemsAction || {}

    if (continuationItems) {

        continuationItems.forEach ((item) => {

            const { compactVideoRenderer } = item

            if (!compactVideoRenderer) return

            data = {
                ...data,
                ...parseRendererVideo (compactVideoRenderer),
            }
        
        })
    
    }

    return data

}
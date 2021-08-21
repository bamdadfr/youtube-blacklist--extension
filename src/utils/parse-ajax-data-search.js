import { parseRendererVideo } from './parse-renderer-video'
import { parseRendererShelf } from './parse-renderer-shelf'

/**
 * @param {object} ajaxData from API
 * @returns {object} {video => channel}
 */
export function parseAjaxDataSearch (ajaxData) {

    let data = {}

    const { contents } = ajaxData
        ?.contents
        ?.twoColumnSearchResultsRenderer
        ?.primaryContents
        ?.sectionListRenderer
        ?.contents
        ?.[0]
        ?.itemSectionRenderer || {}

    if (contents) {

        contents.forEach ((item) => {

            const {
                videoRenderer,
                shelfRenderer,
            } = item

            if (
                !videoRenderer
            && !shelfRenderer
            ) return

            if (videoRenderer) {

                data = {
                    ...data,
                    ...parseRendererVideo (videoRenderer),
                }

            }

            if (shelfRenderer) {

                data = {
                    ...data,
                    ...parseRendererShelf (shelfRenderer),
                }

            }

        })
    
    }

    const { 'contents': contentsSecond } = ajaxData
        ?.onResponseReceivedCommands
        ?.[0]
        ?.appendContinuationItemsAction
        ?.continuationItems
        ?.[0]
        ?.itemSectionRenderer || {}

    if (contentsSecond) {

        contentsSecond.forEach ((item) => {

            const { videoRenderer } = item

            if (!videoRenderer) return

            data = {
                ...data,
                ...parseRendererVideo (videoRenderer),
            }

        })
    
    }

    return data

}
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
        ?.contents[0]
        ?.itemSectionRenderer || {}

    if (!contents) return data

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

    return data

}
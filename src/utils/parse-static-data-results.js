import { parseRendererVideo } from './parse-renderer-video'
import { parseRendererShelf } from './parse-renderer-shelf'

/**
 * @description static data for /results
 *      scope: browser
 * @returns {object} mapping {video => channel}
 */
export function parseStaticDataResults () {

    const { itemSectionRenderer } = window.ytInitialData.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents[0]

    if (itemSectionRenderer === undefined) return

    let data = {}
    const { contents } = itemSectionRenderer

    contents.forEach ((content) => {

        const {
            videoRenderer,
            shelfRenderer,
        } = content

        if (
            videoRenderer === undefined
            && shelfRenderer === undefined
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
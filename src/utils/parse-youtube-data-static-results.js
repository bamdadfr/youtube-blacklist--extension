import { parseYoutubeVideoRenderer } from './parse-youtube-video-renderer'
import { parseYoutubeShelfRenderer } from './parse-youtube-shelf-renderer'

/**
 * @description static data for /results
 *      scope: browser
 * @returns {object} mapping {video => channel}
 */
export function parseYoutubeDataStaticResults () {

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
                ...parseYoutubeVideoRenderer (videoRenderer),
            }

        }

        if (shelfRenderer) {

            data = {
                ...data,
                ...parseYoutubeShelfRenderer (shelfRenderer),
            }

        }

    })

    return data

}
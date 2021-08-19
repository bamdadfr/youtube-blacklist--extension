import { parseYoutubeVideoRenderer } from './parse-youtube-video-renderer'

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

            const { verticalListRenderer } = shelfRenderer.content

            if (verticalListRenderer === undefined) return

            const { items } = verticalListRenderer

            items.forEach ((item) => {

                const { videoRenderer } = item

                if (videoRenderer === undefined) return
                
                data = {
                    ...data,
                    ...parseYoutubeVideoRenderer (videoRenderer),
                }

            })

        }

    })

    return data

}
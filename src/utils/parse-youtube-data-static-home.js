import { parseYoutubeRichItemRenderer } from './parse-youtube-rich-item-renderer'
import { parseYoutubeRichSectionRenderer } from './parse-youtube-rich-section-renderer'

/**
 * @description static data for /
 *      scope: browser
 * @returns {object} home static data
 */
export function parseYoutubeDataStaticHome () {

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
                ...parseYoutubeRichItemRenderer (richItemRenderer),
            }

        }

        if (richSectionRenderer) {

            data = {
                ...data,
                ...parseYoutubeRichSectionRenderer (richSectionRenderer),
            }

        }
    
    })

    return data

}
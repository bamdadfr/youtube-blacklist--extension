import { parseYoutubeVideoRenderer } from './parse-youtube-video-renderer'

/**
 * @description static data for /watch
 *      scope: browser
 * @returns {object} mapping {video => channel}
 */
export function parseYoutubeDataStaticWatch () {

    let data = {}
    const results = window.ytInitialData.contents.twoColumnWatchNextResults.secondaryResults.secondaryResults.results
    let contents = results // data structure for logged out user

    if (Object.keys (results[1])[0] === 'itemSectionRenderer') {

        // data structure for logged in user
        contents = window.ytInitialData.contents.twoColumnWatchNextResults.secondaryResults.secondaryResults.results[1].itemSectionRenderer.contents

    }

    contents.forEach ((content) => {

        const { compactVideoRenderer } = content

        if (compactVideoRenderer === undefined) return

        data = {
            ...data,
            ...parseYoutubeVideoRenderer (compactVideoRenderer),
        }

    })

    return data

}
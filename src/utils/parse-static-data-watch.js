import { parseRendererVideo } from './parse-renderer-video'

/**
 * @description static data for /watch
 *      scope: browser
 * @returns {object} mapping {video => channel}
 */
export function parseStaticDataWatch () {

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
            ...parseRendererVideo (compactVideoRenderer),
        }

    })

    return data

}
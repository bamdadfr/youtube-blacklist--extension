/**
 * @description scope: browser
 * @returns {object} containing videoIds mapped to channelIds
 */
export function defineData () {

    let data = {}
    const results = window.ytInitialData.contents.twoColumnWatchNextResults.secondaryResults.secondaryResults.results
    let contents = results // data structure for un-authenticated user

    if (Object.keys (results[1])[0] === 'itemSectionRenderer') {

        // data structure for authenticated user
        contents = window.ytInitialData.contents.twoColumnWatchNextResults.secondaryResults.secondaryResults.results[1].itemSectionRenderer.contents

    }

    contents.forEach (({ compactVideoRenderer }) => {

        if (typeof compactVideoRenderer === 'undefined') return

        const { videoId } = compactVideoRenderer
        const channelId = compactVideoRenderer.longBylineText.runs[0].navigationEndpoint.browseEndpoint.browseId
        const object = {}

        object[videoId] = channelId

        data = {
            ...data,
            ...object,
        }

    })

    return data

}
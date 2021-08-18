/**
 *
 */
export function getWatchData () {
    
    let data = {}
    const { secondaryResults } = window.ytInitialData.contents.twoColumnWatchNextResults.secondaryResults
    const { results } = secondaryResults

    results.forEach (({ compactVideoRenderer }) => {

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
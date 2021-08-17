/**
 *
 */
export function parseData () {

    const { secondaryResults } = window.ytInitialData.contents.twoColumnWatchNextResults.secondaryResults
    // const resultsOld = secondaryResults[1].itemSectionRenderer.contents
    const { 'results': sidebarElements } = secondaryResults
    let data = {}

    sidebarElements.forEach (({ compactVideoRenderer }) => {

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
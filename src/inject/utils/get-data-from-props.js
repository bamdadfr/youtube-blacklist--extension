/**
 * @param props
 */
export function getDataFromProps (props) {

    let data = {}
    const { results } = props.contents.twoColumnWatchNextResults.secondaryResults.secondaryResults

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

    // console.log ('parse', results.length === Object.keys (window.ytInitialData.contents.twoColumnWatchNextResults.secondaryResults.secondaryResults.results).length)

    return data

}
/**
 * @description scope: browser
 * @param {object} props `ytInitialData`
 * @returns {object} containing videoIds mapped to channelIds
 */
export function defineData (props) {

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

    return data

}
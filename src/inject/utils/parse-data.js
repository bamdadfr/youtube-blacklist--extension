import { createContainer } from './create-container'

/**
 *
 */
export function parseData () {

    const body = document.getElementsByTagName ('body')[0]
    const div = createContainer ()
    let data = {}
    const { results } = window.ytInitialData.contents.twoColumnWatchNextResults.secondaryResults.secondaryResults

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

    div.innerHTML = JSON.stringify (data)

    body.appendChild (div)

}
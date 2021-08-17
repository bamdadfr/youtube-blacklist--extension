/**
 * @param element
 */
export function extractHomeItem (element) {

    if (typeof element.richItemRenderer === 'undefined') return

    const object = {}
    const videoId = element.richItemRenderer.content.videoRenderer.videoId

    object[videoId] = element.richItemRenderer.content.videoRenderer.longBylineText.runs[0].navigationEndpoint.browseEndpoint.browseId

    return object

}
/**
 * @param {object} renderer either `videoRenderer` or `compactVideoRenderer`
 * @returns {object} mapping {video => channel}
 */
export function parseRendererVideo (renderer) {

    const { videoId } = renderer

    const channelId = renderer
        ?.longBylineText
        ?.runs[0]
        ?.navigationEndpoint
        ?.browseEndpoint
        ?.browseId || {}

    const object = {}

    object[videoId] = channelId

    return object

}
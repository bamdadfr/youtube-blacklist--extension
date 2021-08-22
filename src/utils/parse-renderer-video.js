/**
 * @param {object} renderer either `videoRenderer` or `compactVideoRenderer`
 * @returns {object} mapping {video => channel}
 */
export function parseRendererVideo (renderer) {

    const object = {}
    const { videoId } = renderer

    if (!videoId) return object

    const { 'browseId': channelId } = renderer
        ?.longBylineText
        ?.runs
        ?.[0]
        ?.navigationEndpoint
        ?.browseEndpoint || {}

    if (!channelId) return object

    object[videoId] = channelId

    return object

}
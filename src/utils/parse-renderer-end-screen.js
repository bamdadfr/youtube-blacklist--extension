/**
 * @param {object} renderer `endScreenVideoRenderer`
 * @returns {object} {video => channel}
 */
export function parseRendererEndScreen (renderer) {

    const object = {}
    const { videoId } = renderer

    if (!videoId) return object

    const { 'browseId': channelId } = renderer
        ?.shortBylineText
        ?.runs
        ?.[0]
        ?.navigationEndpoint
        ?.browseEndpoint || {}
    
    if (!channelId) return object

    object[videoId] = channelId

    return object

}
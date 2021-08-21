/**
 * @param {object} renderer `endScreenVideoRenderer`
 * @returns {object} {video => channel}
 */
export function parseRendererEndScreen (renderer) {

    const { videoId } = renderer

    const { 'browseId': channelId } = renderer
        ?.shortBylineText
        ?.runs
        ?.[0]
        ?.navigationEndpoint
        ?.browseEndpoint || {}

    const object = {}

    object[videoId] = channelId

    return object

}
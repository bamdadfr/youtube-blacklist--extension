/**
 * @param {object} params parameters
 * @param {string} params.id video id
 * @param {object} params.blacklist blacklist map {channelId => channelName}
 * @param {object} params.channelsByVideo channels by video map {videoId => channelId}
 * @returns {boolean} is video id blacklisted?
 */
export function isBlacklisted ({
    id,
    blacklist,
    channelsByVideo,
}) {

    return typeof blacklist[channelsByVideo[id]] !== 'undefined'

}
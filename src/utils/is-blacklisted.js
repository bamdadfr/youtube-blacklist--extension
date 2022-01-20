/**
 * @param {object} params parameters
 * @param {string} params.id video id
 * @param {object} params.blacklist blacklist map {channelId => channelName}
 * @param {object} params.channelByVideo {videoId => channelId}
 * @returns {boolean} is video id blacklisted?
 */
export function isBlacklisted({
  id,
  blacklist,
  channelByVideo,
}) {
  return typeof blacklist[channelByVideo[id]] !== 'undefined';
}

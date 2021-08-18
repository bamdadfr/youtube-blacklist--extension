import { getChannelsByVideo } from './get-channels-by-video'
import { getIdFromThumbnail } from './get-id-from-thumbnail'

/**
 * @param {HTMLDivElement} thumbnail youtube compactVideoRenderer
 * @typedef {string} Hash channel hash/id
 * @typedef {string} Name channel name
 * @returns {{Hash,Name}} channel object
 */
export async function getChannelFromThumbnail (thumbnail) {

    const id = getIdFromThumbnail (thumbnail)
    const channelsByVideo = await getChannelsByVideo ()
    const hash = channelsByVideo[id]

    const name = thumbnail
        .getElementsByTagName ('ytd-channel-name')[0]
        .children[0]
        .children[0]
        .children[0]
        .innerHTML

    const obj = {}

    obj[hash] = name

    return obj

}
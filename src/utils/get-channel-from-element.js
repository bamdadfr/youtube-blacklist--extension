import { getIdFromElement } from './get-id-from-element'
import { getDeepestChildContent } from './get-deepest-child-content'
import { getState } from './get-state'

/**
 * @param {HTMLDivElement} element youtube compactVideoRenderer
 * @typedef {string} Hash channel hash/id
 * @typedef {string} Name channel name
 * @returns {{Hash,Name}} channel object
 */
export async function getChannelFromElement (element) {

    const id = getIdFromElement (element)
    const { channelsByVideo } = await getState ()
    const channelId = channelsByVideo[id]
    const parent = element.getElementsByTagName ('ytd-channel-name')[0]
    const name = getDeepestChildContent (parent)
    const obj = {}

    obj[channelId] = name

    return obj

}
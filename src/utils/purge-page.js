import { getChannelsByVideo } from './get-channels-by-video'
import { getIdFromElement } from './get-id-from-element'
import { getVideoElements } from './get-video-elements'
import { getState } from './get-state'
import { isBlacklisted } from './is-blacklisted'

const lengths = {
    'elements': undefined,
    'channelsByVideo': undefined,
    'blacklist': undefined,
}

const getLengths = {
    'areUnchanged': ({ elements, channelsByVideo, blacklist }) => elements.length === lengths.elements
        && Object.keys (channelsByVideo).length === lengths.channelsByVideo
        && Object.keys (blacklist).length === lengths.blacklist,
}

const setLengths = ({ elements, channelsByVideo, blacklist }) => {

    lengths.elements = elements.length

    lengths.channelsByVideo = Object.keys (channelsByVideo).length

    lengths.blacklist = Object.keys (blacklist).length

}

/**
 * @description purge `/watch` page
 */
export async function purgePage () {

    const elements = await getVideoElements ()
    const channelsByVideo = await getChannelsByVideo ()
    const { blacklist } = await getState ()

    if (getLengths.areUnchanged ({ elements, channelsByVideo, blacklist })) return

    Array.from (elements).map (async (element) => {

        if (element.style.display === 'none') return
        
        const id = getIdFromElement (element)

        if (
            isBlacklisted ({ id, blacklist, channelsByVideo })
        ) {

            element.style.display = 'none'
        
        }

    })

    setLengths ({ elements, channelsByVideo, blacklist })

}
import { getIdFromElement } from './get-id-from-element'
import { getVideoElements } from './get-video-elements'
import { getState } from './get-state'
import { isBlacklisted } from './is-blacklisted'

const defaultOptions = {
    'force': false,
}

let savedLength = undefined

/**
 * @param {object} params parameters
 * @param {boolean} params.force force purge
 */
export async function purgePage ({ force } = defaultOptions) {

    const videos = await getVideoElements ()
    const { blacklist, channelsByVideo } = await getState ()
    
    if (!force && videos.length === savedLength) return

    Array.from (videos).map (async (video) => {

        if (video.style.display === 'none') return
        
        const id = getIdFromElement (video)

        if (
            isBlacklisted ({ id, blacklist, channelsByVideo })
        ) {

            // todo remove after dev
            console.log (id)

            video.style.display = 'none'
        
        }

    })

    savedLength = videos.length

}
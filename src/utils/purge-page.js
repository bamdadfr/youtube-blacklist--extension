import { getVideo } from './get-video'
import { getVideos } from './get-videos'
import { getState } from './get-state'
import { isBlacklisted } from './is-blacklisted'
import { getChannelByVideo } from './get-channel-by-video'

const defaultOptions = {
    'force': false,
}

let savedLength = undefined

/**
 * @param {object} params parameters
 * @param {boolean} params.force force purge
 */
export async function purgePage ({
    force,
} = defaultOptions) {

    const videos = await getVideos ()
    const channelByVideo = await getChannelByVideo ()
    const { blacklist } = await getState ()

    if (!force && videos.length === savedLength) return

    Array.from (videos).map (async (video) => {

        if (video.style.display === 'none') return
        
        const id = getVideo (video)

        if (
            isBlacklisted ({ id, blacklist, channelByVideo })
        ) {

            // todo remove after dev
            console.log (id)

            video.style.display = 'none'
        
        }

    })

    savedLength = videos.length

}
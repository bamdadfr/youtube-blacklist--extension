import { getChannelsByVideo } from './get-channels-by-video'
import { getThumbnails } from './get-thumbnails'
import { getIdFromThumbnail } from './get-id-from-thumbnail'
import { getState } from './get-state'

let savedDataLength = {}
let savedThumbnailsLength = -1

/**
 * @description purge `/watch` page
 */
export async function purgeWatch () {

    const channelsByVideo = await getChannelsByVideo ()
    const thumbnails = getThumbnails ()

    // return if `data` & `element` have not changed
    if (
        Object.keys (channelsByVideo).length === savedDataLength
        && thumbnails.length === savedThumbnailsLength
    ) return

    // fetch blacklist
    const { blacklist } = await getState ()

    // iterate through elements
    // & hide blacklisted channels
    Array.from (thumbnails).forEach ((thumbnail) => {

        // already hidden
        if (thumbnail.style.display === 'none') return
        
        const id = getIdFromThumbnail (thumbnail)

        if (typeof blacklist[channelsByVideo[id]] === 'undefined') return

        // eslint-disable-next-line no-console
        console.log (id) // todo: remove when dev is done

        thumbnail.style.display = 'none'

    })

    // save current parameters
    savedDataLength = Object.keys (channelsByVideo).length

    savedThumbnailsLength = thumbnails.length

}
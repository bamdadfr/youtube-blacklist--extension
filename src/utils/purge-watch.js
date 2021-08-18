import blacklist from '../temp/blacklist.json'
import { getDataFromBrowser } from './get-data-from-browser'
import { getThumbnails } from './get-thumbnails'
import { getIdFromThumbnail } from './get-id-from-thumbnail'

let savedDataLength = {}
let savedThumbnailsLength = -1

/**
 * @description purge `/watch` page
 */
export async function purgeWatch () {

    const data = await getDataFromBrowser ()
    const thumbnails = getThumbnails ()

    // return if `data` & `element` have not changed
    if (
        Object.keys (data).length === savedDataLength
        && thumbnails.length === savedThumbnailsLength
    ) return

    // iterate through elements
    // & hide blacklisted channels
    Array.from (thumbnails).forEach ((thumbnail) => {

        // already hidden
        if (thumbnail.style.display === 'none') return
        
        const id = getIdFromThumbnail (thumbnail)

        if (typeof blacklist[data[id]] === 'undefined') return

        console.log (id)

        thumbnail.style.display = 'none'

    })

    // save current parameters
    savedDataLength = Object.keys (data).length

    savedThumbnailsLength = thumbnails.length

}
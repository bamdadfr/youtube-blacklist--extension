import blacklist from '../temp/blacklist.json'
import { getDataFromBrowser } from './get-data-from-browser'

let savedDataLength = {}
let savedElementsLength = -1

/**
 * @description purge `/watch` page
 */
export async function purgeWatch () {

    const data = await getDataFromBrowser ()
    const elements = document.getElementsByTagName ('ytd-compact-video-renderer')

    // return if `data` & `element` have not changed
    if (
        Object.keys (data).length === savedDataLength
        && elements.length === savedElementsLength
    ) return

    // iterate through elements
    // & hide blacklisted channels
    Array.from (elements).forEach ((element) => {

        // already hidden
        if (element.style.display === 'none') return

        const href = element.getElementsByTagName ('a')[0].href
        const id = /v=.*?(?=&|$)/.exec (href)[0].replace ('v=', '')

        if (typeof blacklist[data[id]] === 'undefined') return

        console.log (id)

        element.style.display = 'none'

    })

    // save current parameters
    savedDataLength = Object.keys (data).length

    savedElementsLength = elements.length

}
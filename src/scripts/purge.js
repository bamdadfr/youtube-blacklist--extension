import { DATA_DIV_ID } from './constants'
import blacklist from './blacklist.json'

/**
 * @param page
 */
export function purge (page) {

    if (page === 'watch') {

        const data = document.getElementById (DATA_DIV_ID).innerHTML
        const channels = JSON.parse (data)
        const elements = document.getElementsByTagName ('ytd-compact-video-renderer')

        Array.from (elements).forEach ((element) => {

            const href = element.getElementsByTagName ('a')[0].href
            const id = /v=.*?(?=&|$)/.exec (href)[0].replace ('v=', '')

            if (typeof blacklist[channels[id]] === 'undefined') return

            // element.style.display = 'none'
            element.remove ()

        })

    }

}
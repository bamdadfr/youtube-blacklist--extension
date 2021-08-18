import { DATA_DIV_ID } from './constants'
import blacklist from './blacklist.json'
import { isWatch } from './utils/detect-page'

/**
 * @param page
 */
export function purge (page) {

    const div = document.getElementById (DATA_DIV_ID)
    const elements = document.getElementsByTagName ('ytd-compact-video-renderer')

    if (!isWatch (window.location.href)) return

    if (div === null) return

    if (elements.length === 0) return

    if (page === 'watch') {

        const data = div.innerHTML
        const channels = JSON.parse (data)

        // console.log ('purge', Object.keys (channels).length)

        Array.from (elements).forEach ((element) => {

            // already hidden
            if (element.style.display === 'none') return

            const href = element.getElementsByTagName ('a')[0].href
            const id = /v=.*?(?=&|$)/.exec (href)[0].replace ('v=', '')

            if (typeof channels[id] === 'undefined') {

                // console.log ('channel not found', id)

            }

            if (typeof blacklist[channels[id]] === 'undefined') return

            element.style.display = 'none'

        })

    }

}
import { DATA_DIV_ID } from './constants'
import blacklist from './blacklist.json'

/**
 * @param page
 * @param retryDelay
 */
export function purge (page, retryDelay = 1000) {

    const retry = () => {

        setTimeout (() => {

            purge (page)

        }, retryDelay)

    }

    const div = document.getElementById (DATA_DIV_ID)
    const elements = document.getElementsByTagName ('ytd-compact-video-renderer')

    if (div === null) return retry (page, retryDelay)

    if (elements.length === 0) return retry (page, retryDelay)

    if (page === 'watch') {

        const data = div.innerHTML
        const channels = JSON.parse (data)

        Array.from (elements).forEach ((element) => {

            const href = element.getElementsByTagName ('a')[0].href
            const id = /v=.*?(?=&|$)/.exec (href)[0].replace ('v=', '')

            if (typeof blacklist[channels[id]] === 'undefined') return

            // element.style.display = 'none'
            element.remove ()

        })

        retry ()

    }

}
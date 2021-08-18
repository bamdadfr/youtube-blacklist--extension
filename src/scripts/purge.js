import blacklist from './blacklist.json'

/**
 * @param channels
 */
export function purge (channels) {

    const elements = document.getElementsByTagName ('ytd-compact-video-renderer')

    Array.from (elements).forEach ((element) => {

        // already hidden
        if (element.style.display === 'none') return

        const href = element.getElementsByTagName ('a')[0].href
        const id = /v=.*?(?=&|$)/.exec (href)[0].replace ('v=', '')

        if (typeof channels[id] === 'undefined') {

            // console.log ('channel not found', id)

        }

        if (typeof blacklist[channels[id]] === 'undefined') return

        console.log (id)

        element.style.display = 'none'

    })

}
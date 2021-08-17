import { getBrowser } from './utils/get-browser'
import blacklist from './blacklist.json'
import { injectScript } from './utils/inject-script'
import { DATA_DIV_ID } from './constants'

const run = (elements, channels) => {

    Array.from (elements).forEach ((element) => {

        const href = element.getElementsByTagName ('a')[0].href
        const id = /v=.*?(?=&|$)/.exec (href)[0].replace ('v=', '')

        if (typeof blacklist[channels[id]] === 'undefined') return

        // element.style.display = 'none'
        element.remove ()

    })

}

const work = () => {

    const data = document.getElementById (DATA_DIV_ID).innerHTML
    const elements = document.getElementsByTagName ('ytd-compact-video-renderer')

    run (elements, JSON.parse (data))

}

// https://www.youtube.com/watch?v=6G-hZV2RfhM
const ContentOnLoad = () => {

    const browser = getBrowser ()

    injectScript (
        browser.runtime.getURL ('injected/watch.js'),
        'body',
    )

    setTimeout (() => {

        work ()
    
    }, 2000)

}

window.addEventListener ('load', ContentOnLoad)
import { getBrowser } from './utils/get-browser'
import { injectScript } from './utils/inject-script'
import { detectPage } from './utils/detect-page'
import { purge } from './purge'
import { onHrefChange } from './utils/on-href-change'

// https://www.youtube.com/watch?v=6G-hZV2RfhM
const run = () => {

    const browser = getBrowser ()
    const page = detectPage ()

    if (page) {

        injectScript (
            browser.runtime.getURL (`inject/${page}.js`),
            'body',
        )

        setTimeout (() => {

            purge (page)

        }, 3000)

    }

}

window.onload = () => {

    run ()

    onHrefChange (run)

}
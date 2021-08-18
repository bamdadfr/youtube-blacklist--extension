import { injectScript } from './utils/inject-script'
import { detectPage } from './utils/detect-page'
import { purge } from './purge'
import { onHrefChange } from './utils/on-href-change'

// https://www.youtube.com/watch?v=6G-hZV2RfhM
const run = () => {

    const page = detectPage ()

    if (page) {

        injectScript (`inject/${page}.js`)
            .then (() => purge (page))

        // purge (page)

    }

}

window.addEventListener ('load', () => {

    run ()

    onHrefChange (run)

})
import { injectScript } from './utils/inject-script'
import { detectPage } from './utils/detect-page'
import { purge } from './purge'
import { onHrefChange } from './utils/on-href-change'
import { INTERVAL_FREQUENCY } from './constants'

const test = async () => {

    const response = await fetch ('https://www.youtube.com/watch?v=fjugzZXnO4g')
    const data = await response.text ()
    const regex = /var ytInitialData = {(.*)}(?=;<)/
    const string = `{${regex.exec (data)[1]}}`

    console.log (JSON.parse (string))

}

// https://www.youtube.com/watch?v=6G-hZV2RfhM
const run = () => {

    const page = detectPage ()

    if (page === 'watch') {

        injectScript (`inject/${page}.js`)

        setInterval (() => {

            purge (page)
        
        }, INTERVAL_FREQUENCY)

    }

}

window.addEventListener ('load', () => {

    test ()

    run ()

    onHrefChange (run)

})
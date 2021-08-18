import { injectScript } from './utils/inject-script'
import { detectPage } from './utils/detect-page'
import { purge } from './purge'
import { onHrefChange } from './utils/on-href-change'
import { INTERVAL_FREQUENCY } from './constants'
import { getDataFromProps } from '../inject/utils/get-data-from-props'

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

const algo = async () => {

    const href = window.location.href
    const page = detectPage ()

    if (page === 'watch') {

        injectScript (`inject/${page}.js`)

        const response = await fetch (href)
        const responseText = await response.text ()
        const regex = /var ytInitialData = {(.*)}(?=;<)/
        const string = `{${regex.exec (responseText)[1]}}`
        const props = JSON.parse (string)
        const data = getDataFromProps (props)

        setInterval (() => {

            purge (data)

        }, INTERVAL_FREQUENCY)

    }

}

window.addEventListener ('load', () => {

    // test ()
    //
    // run ()
    //
    // onHrefChange (run)
    onHrefChange (algo)

    algo ()

})
import { getDataFromProps } from './utils/get-data-from-props'
import { INTERVAL_FREQUENCY } from '../scripts/constants'
import { isWatch } from '../scripts/utils/detect-page'

(() => {

    setInterval (() => {

        if (!isWatch (window.location.href)) return

        const data = getDataFromProps (window.ytInitialData)

        console.log (Object.keys (data).length)

    }, INTERVAL_FREQUENCY)

}) ()
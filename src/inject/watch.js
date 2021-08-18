import { parseData } from './utils/parse-data'
import { INTERVAL_FREQUENCY } from '../scripts/constants'
import { isWatch } from '../scripts/utils/detect-page'

(() => {

    setInterval (() => {

        if (!isWatch (window.location.href)) return

        parseData ()

    }, INTERVAL_FREQUENCY)

}) ()
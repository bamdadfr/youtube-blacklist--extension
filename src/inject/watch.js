import { isWatch } from '../utils/detect-page'
import { parseData } from '../utils/parse-data'
import { appendBody } from '../utils/append-body'
import { DATA_DIV, INTERVAL } from '../utils/constants'

(() => {

    setInterval (() => {

        // ensure currentPage is `/watch`
        if (!isWatch (window.location.href)) return

        // define data from `ytInitialData`
        const data = parseData (window.ytInitialData)
        const appendedNode = document.getElementById (DATA_DIV)

        // appendedNode exists?
        // we want to early return if data did not change
        if (appendedNode) {

            const dataLength = Object.keys (data).length
            const appendedData = JSON.parse (appendedNode.innerHTML)
            const appendedDataLength = Object.keys (appendedData).length

            if (dataLength === appendedDataLength) return

        }

        // append to body
        appendBody (DATA_DIV, JSON.stringify (data))

    }, INTERVAL)

}) ()
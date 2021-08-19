import { isWatch } from '../utils/detect-page'
import { defineData } from '../utils/define-data'
import { appendBody } from '../utils/append-body'
import { CHANNELS_BY_VIDEO_ID, INTERVAL } from '../utils/constants'

(() => {

    setInterval (() => {

        // ensure currentPage is `/watch`
        if (!isWatch (window.location.href)) return

        // define data
        const data = defineData ()
        const appendedNode = document.getElementById (CHANNELS_BY_VIDEO_ID)

        // appendedNode exists?
        // we want to early return if data did not change
        if (appendedNode) {

            const dataLength = Object.keys (data).length
            const appendedData = JSON.parse (appendedNode.innerHTML)
            const appendedDataLength = Object.keys (appendedData).length

            if (dataLength === appendedDataLength) return

        }

        // append to body
        appendBody (CHANNELS_BY_VIDEO_ID, data)

    }, INTERVAL)

}) ()
import { isPageHome } from '../utils/is-page-home'
import { CHANNELS_BY_VIDEO_ID, INTERVAL } from '../utils/constants'
import { parseStaticDataHome } from '../utils/parse-static-data-home'
import { appendData } from '../utils/append-data'

(() => {

    setInterval (() => {

        if (!isPageHome (window.location.href)) return

        const data = parseStaticDataHome ()

        appendData ({
            data,
            'id': CHANNELS_BY_VIDEO_ID,
        })

    }, INTERVAL)

}) ()
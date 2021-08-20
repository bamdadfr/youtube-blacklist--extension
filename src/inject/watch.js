import { isPageWatch } from '../utils/is-page-watch'
import { parseStaticDataWatch } from '../utils/parse-static-data-watch'
import { CHANNEL_BY_VIDEO_ID, INTERVAL } from '../utils/constants'
import { appendData } from '../utils/append-data'

(() => {

    setInterval (() => {

        if (!isPageWatch (window.location.href)) return

        const data = parseStaticDataWatch ()

        appendData ({
            data,
            'id': CHANNEL_BY_VIDEO_ID,
        })

    }, INTERVAL)

}) ()
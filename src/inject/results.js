import { isPageResults } from '../utils/detect-page'
import { appendData } from '../utils/append-data'
import { CHANNELS_BY_VIDEO_ID, INTERVAL } from '../utils/constants'
import { parseYoutubeDataStaticResults } from '../utils/parse-youtube-data-static-results'

(() => {

    setInterval (() => {

        if (!isPageResults (window.location.href)) return

        const data = parseYoutubeDataStaticResults ()

        appendData ({
            data,
            'id': CHANNELS_BY_VIDEO_ID,
        })

    }, INTERVAL)

}) ()
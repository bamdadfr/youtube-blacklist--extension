import { isHome } from '../utils/detect-page'
import { CHANNELS_BY_VIDEO_ID, INTERVAL } from '../utils/constants'
import { parseYoutubeDataStaticHome } from '../utils/parse-youtube-data-static-home'
import { appendData } from '../utils/append-data'

(() => {

    setInterval (() => {

        if (!isHome (window.location.href)) return

        const data = parseYoutubeDataStaticHome ()

        appendData ({
            data,
            'id': CHANNELS_BY_VIDEO_ID,
            'expand': true,
        })

    }, INTERVAL)

}) ()
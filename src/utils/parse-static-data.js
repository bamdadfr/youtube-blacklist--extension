import { isPageHome } from './is-page-home'
import { parseStaticDataHome } from './parse-static-data-home'
import { appendData } from './append-data'
import { CHANNEL_BY_VIDEO_ID, INTERVAL } from './constants'
import { isPageWatch } from './is-page-watch'
import { isPageResults } from './is-page-results'
import { parseStaticDataResults } from './parse-static-data-results'
import { parseStaticDataWatch } from './parse-static-data-watch'
import { compareObjects } from './compare-objects'

/**
 *
 */
export function parseStaticData () {

    let isLoaded = false

    const interval = setInterval (() => {

        const { href } = window.location

        if (isLoaded) return clearInterval (interval)

        if (
            isPageHome (href)
            || isPageWatch (href)
            || isPageResults (href)
        ) {

            isLoaded = true

        }

        let data = {}

        if (isPageHome (href)) data = parseStaticDataHome ()

        if (isPageResults (href)) data = parseStaticDataResults ()

        if (isPageWatch (href)) data = parseStaticDataWatch ()

        if (compareObjects (data, {})) return

        appendData ({
            data,
            'id': CHANNEL_BY_VIDEO_ID,
        })

    }, INTERVAL)

}
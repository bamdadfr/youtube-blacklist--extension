import { parseAjaxDataHome } from './parse-ajax-data-home'
import { appendData } from './append-data'
import { CHANNEL_BY_VIDEO_ID } from './constants'
import { parseAjaxDataSearch } from './parse-ajax-data-search'
import { parseAjaxDataNext } from './parse-ajax-data-next'

/**
 * @description entry point for ajax requests
 * @param {string} url request URL
 * @param {object} data raw API response
 */
export function parseAjaxData (url, data) {

    if (url.includes ('/v1/browse')) {

        const newData = parseAjaxDataHome (data)

        appendData ({
            'data': newData,
            'id': CHANNEL_BY_VIDEO_ID,
        })

    }

    if (url.includes ('/v1/search')) {

        const newData = parseAjaxDataSearch (data)

        appendData ({
            'data': newData,
            'id': CHANNEL_BY_VIDEO_ID,
        })

    }

    if (url.includes ('/v1/next')) {

        const newData = parseAjaxDataNext (data)

        appendData ({
            'data': newData,
            'id': CHANNEL_BY_VIDEO_ID,
        })

    }

}
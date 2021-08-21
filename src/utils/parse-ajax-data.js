import { parseAjaxDataBrowse } from './parse-ajax-data-browse'
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

    let newData = undefined

    // client navigates to /
    if (url.includes ('/v1/browse')) newData = parseAjaxDataBrowse (data)
    
    // client navigates to /results
    if (url.includes ('/v1/search')) newData = parseAjaxDataSearch (data)

    // client navigates to /watch
    if (url.includes ('/v1/next')) newData = parseAjaxDataNext (data)

    console.log (Object.keys (newData).length, newData, url)

    appendData ({
        'data': newData,
        'id': CHANNEL_BY_VIDEO_ID,
    })

}
import { AJAX_DATA_ID } from './constants'
import { parseAjaxData } from './parse-ajax-data'
import { appendData } from './append-data'

/**
 * @param {object} data ajax body
 */
export function setAjaxData (data) {

    appendData ({
        data,
        'id': AJAX_DATA_ID,
    })

    parseAjaxData (data)

}
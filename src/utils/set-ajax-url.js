import { appendBody } from './append-body'
import { AJAX_URL_ID } from './constants'

/**
 * @param {string} url ajax url string
 */
export function setAjaxUrl (url) {

    console.log (url)

    appendBody (AJAX_URL_ID, url)

}
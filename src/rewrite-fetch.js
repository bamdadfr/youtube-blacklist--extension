/* eslint-disable func-names,prefer-rest-params */

import { appendBody } from './utils/append-body'
import { AJAX_URL_ID, AJAX_RESPONSE_ID } from './utils/constants'

/**
 * @description add an interceptor to fetch `fetch`
 */
export function rewriteFetch () {

    const originalFetch = window.fetch

    window.fetch = function () {

        return originalFetch
            .apply (this, arguments)
            .then ((response) => {

                const { url } = response

                console.log (url)

                appendBody (AJAX_URL_ID, url)

                return response
            
            })
            // .then ((r) => r.json ())
            // .then ((data) => {
            //
            //     console.log (data)
            //
            //     appendBody (AJAX_RESPONSE_ID, data)
            //
            // })

    }

}
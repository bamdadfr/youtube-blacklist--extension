/* eslint-disable func-names,prefer-rest-params */

import { appendBody } from './append-body'
import { AJAX_URL_ID, AJAX_RESPONSE_ID } from './constants'

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
            .then (async (d) => {

                const data = d.clone ()
                const json = await data.json ()

                console.log (json)

                appendBody (AJAX_RESPONSE_ID, json)

                return d

            })

    }

}
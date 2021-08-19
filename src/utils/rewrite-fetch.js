/* eslint-disable func-names,prefer-rest-params */

import { appendBody } from './append-body'
import { AJAX_URL_ID, AJAX_RESPONSE_ID } from './constants'
import { parseYoutubeDataAjax } from './parse-youtube-data-ajax'

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

                appendBody (AJAX_RESPONSE_ID, json)

                parseYoutubeDataAjax (json)

                return d

            })

    }

}
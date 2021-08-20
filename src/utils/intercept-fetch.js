/* eslint-disable func-names,prefer-rest-params */

import { parseAjaxData } from './parse-ajax-data'

/**
 * @description add an interceptor to fetch `fetch`
 */
export function interceptFetch () {

    const originalFetch = window.fetch

    window.fetch = function () {

        return originalFetch
            .apply (this, arguments)
            .then ((r) => r)
            .then (async (response) => {

                const clonedResponse = response.clone ()
                const { url } = clonedResponse
                const data = await clonedResponse.json ()

                // todo response is stalled when parsing, causing client to not load on scroll
                parseAjaxData (url, data)

                return response

            })

    }

}
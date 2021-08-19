/* eslint-disable func-names,prefer-rest-params */

import { setAjaxUrl } from './set-ajax-url'
import { setAjaxData } from './set-ajax-data'

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

                setAjaxUrl (url)

                return response

            })
            .then (async (d) => {

                const data = d.clone ()
                const json = await data.json ()

                setAjaxData (json)

                return d

            })

    }

}
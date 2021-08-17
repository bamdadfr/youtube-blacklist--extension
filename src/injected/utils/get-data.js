import { getDataContainer } from './get-data-container'
import { parseData } from './parse-data'

/**
 *
 */
export function getData () {

    const body = document.getElementsByTagName ('body')[0]
    const div = getDataContainer ()
    const data = parseData ()

    div.innerHTML = JSON.stringify (data)

    body.appendChild (div)

}
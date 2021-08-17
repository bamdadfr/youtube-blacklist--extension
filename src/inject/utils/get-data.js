import { getDataContainer } from './get-data-container'
import { getWatchData } from './get-watch-data'
import { getHomeData } from './get-home-data'

/**
 * @param page
 */
export function getData (page) {

    const body = document.getElementsByTagName ('body')[0]
    const div = getDataContainer ()
    let data = {}

    switch (page) {

        case 'watch':

            data = getWatchData ()

            break

        case 'home':
            data = getHomeData ()

            break

        default:

            throw new Error ('page not found')

    }

    console.log (Object.keys (data).length)

    div.innerHTML = JSON.stringify (data)

    body.appendChild (div)

}
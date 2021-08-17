import { getData } from './get-data'

/**
 *
 */
export function watchSidebar () {

    const sidebar = document.querySelectorAll ('#items')[1]

    sidebar.addEventListener ('DOMSubtreeModified', () => {

        getData ()

    })

}
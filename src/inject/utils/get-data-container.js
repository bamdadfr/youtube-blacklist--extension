import { DATA_DIV_ID } from '../../scripts/constants'

/**
 *
 */
export function getDataContainer () {

    const targetDiv = document.getElementById (DATA_DIV_ID)

    // target already exists
    if (targetDiv !== null) return targetDiv

    const div = document.createElement ('div')

    div.setAttribute ('id', DATA_DIV_ID)

    div.setAttribute ('style', 'display: none;')

    return div

}
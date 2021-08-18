/**
 * @param {string} id div id
 * @returns {HTMLDivElement} unique div
 */
export function createUniqueContainer (id) {

    const targetDiv = document.getElementById (id)

    // target already exists
    if (targetDiv !== null) return targetDiv

    const div = document.createElement ('div')

    div.setAttribute ('id', id)

    div.setAttribute ('style', 'display: none;')

    return div

}
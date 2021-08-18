import { createUniqueContainer } from './create-unique-container'

/**
 * @param {string} id div unique id
 * @param {string} payload div innerHTML
 */
export function appendBody (id, payload) {

    const body = document.getElementsByTagName ('body')[0]
    const div = createUniqueContainer (id)

    div.innerHTML = payload

    body.appendChild (div)

}
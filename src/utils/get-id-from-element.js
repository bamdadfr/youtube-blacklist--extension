/**
 * @param {HTMLDivElement} element youtube video element
 * @returns {string} video id
 */
export function getIdFromElement (element) {

    const href = element.getElementsByTagName ('a')[0].href
    const regex = /v=.*?(?=&|$)/

    return regex
        .exec (href)[0]
        .replace ('v=', '')

}
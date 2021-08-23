/**
 * @param {HTMLDivElement} element youtube video element
 * @returns {string|undefined} video id
 */
export function getVideo (element) {

    const href = element.getElementsByTagName ('a')[0].href

    if (!href) return

    const regex = /v=.*?(?=&|$)/
    const match = regex.exec (href)[0]

    if (!match) return

    return match.replace ('v=', '')

}
/**
 * @param {string} url href string
 * @returns {boolean} ?
 */
export function isPageWatch (url) {

    return /youtube(\.com)?\/watch\?v=/.exec (url) !== null

}
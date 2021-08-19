/**
 * @param {string} url href string
 * @returns {boolean} ?
 */
export function isPageResults (url) {

    return /youtube(\.com)?\/results/.exec (url) !== null

}
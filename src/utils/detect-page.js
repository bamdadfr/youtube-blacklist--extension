export const isHome = (url) => /youtube(\.com)?\/?$/.exec (url) !== null

export const isWatch = (url) => /youtube(\.com)?\/watch\?v=/.exec (url) !== null

let currentPage = null
let previousPage = null

/**
 * @typedef {string|null} CurrentPage
 * @typedef {string|null} PreviousPage
 * @returns {{CurrentPage,PreviousPage}} page history
 */
export function detectPage () {

    const { href } = window.location

    if (isHome (href)) {

        previousPage = currentPage

        currentPage = 'home'

        return [currentPage, previousPage]
    
    }

    if (isWatch (href)) {

        previousPage = currentPage

        currentPage = 'watch'

        return [currentPage, previousPage]

    }

    previousPage = currentPage

    currentPage = null

    return [currentPage, previousPage]

}
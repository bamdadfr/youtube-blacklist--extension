export const isPageHome = (url) => /youtube(\.com)?\/?$/.exec (url) !== null

export const isPageWatch = (url) => /youtube(\.com)?\/watch\?v=/.exec (url) !== null

export const isPageResults = (url) => /youtube(\.com)?\/results/.exec (url) !== null

let currentPage = null
let previousPage = null

/**
 * @typedef {string|null} CurrentPage
 * @typedef {string|null} PreviousPage
 * @returns {{CurrentPage,PreviousPage}} page history
 */
export function detectPage () {

    const { href } = window.location

    if (isPageHome (href)) {

        previousPage = currentPage

        currentPage = 'home'

        return [currentPage, previousPage]
    
    }

    if (isPageWatch (href)) {

        previousPage = currentPage

        currentPage = 'watch'

        return [currentPage, previousPage]

    }

    if (isPageResults (href)) {

        previousPage = currentPage

        currentPage = 'results'

        return [currentPage, previousPage]

    }

    previousPage = currentPage

    currentPage = null

    return [currentPage, previousPage]

}
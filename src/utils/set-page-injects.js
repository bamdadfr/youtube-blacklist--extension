import { injectScript } from './inject-script'
import { detectPage } from './detect-page'

/**
 * @description injects are only used to retrieve static data
 *      therefore, only injected on first page load
 */
export function setPageInjects () {

    injectScript ('inject/all.js')

    const [currentPage] = detectPage ()

    if (
        currentPage === 'watch'
        || currentPage === 'home'
        || currentPage === 'results'
    ) {

        injectScript (`inject/${currentPage}.js`)
    
    }

}
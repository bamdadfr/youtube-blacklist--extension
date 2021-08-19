import { detectPage } from './detect-page'
import { injectScript } from './inject-script'

/**
 * @description injects are only used to retrieve static data
 *      therefore, only injected on first page load
 */
export function setPageInjects () {

    const [currentPage] = detectPage ()

    injectScript ('inject/all.js')

    if (
        currentPage === 'watch'
        || currentPage === 'home'
        || currentPage === 'results'
    ) {

        injectScript (`inject/${currentPage}.js`)
    
    }

}
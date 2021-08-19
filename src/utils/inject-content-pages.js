import { detectPage } from './detect-page'
import { injectScript } from './inject-script'

/**
 *
 */
export function injectContentPages () {

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
import { detectPage } from './detect-page'
import { injectScript } from './inject-script'

/**
 *
 */
export function injectContentPages () {

    const [currentPage] = detectPage ()

    injectScript ('inject/all.js')

    if (currentPage === 'watch') {

        injectScript ('inject/watch.js')

    }

    if (currentPage === 'home') {

        injectScript ('inject/home.js')

    }

}
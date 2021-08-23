import { injectScript } from './inject-script'

/**
 * @description injects are only used to retrieve static data
 *      therefore, only injected on first page load
 */
export function setPageInjects () {

    injectScript ('inject/all.js')

}
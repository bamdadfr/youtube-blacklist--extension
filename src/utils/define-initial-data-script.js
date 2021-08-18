import { SCRIPT_ID } from './constants'

/**
 * @description scope: browser
 *      find <script> defining `ytInitialData`
 *      & attach an id to it
 */
export function defineInitialDataScript () {

    const scripts = document.getElementsByTagName ('script')

    const [script] = Array
        .from (scripts)
        .filter ((script) => script.innerHTML.includes ('var ytInitialData'))

    script.id = SCRIPT_ID

}
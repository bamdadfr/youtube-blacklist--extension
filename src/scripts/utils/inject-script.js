import { getBrowser } from './get-browser'

/**
 * @param file
 * @param targetNode
 */
export function injectScript (file, targetNode = 'body') {

    const browser = getBrowser ()
    const path = browser.runtime.getURL (file)
    const doesExist = document.querySelector (`script[src*='${file}']`) !== null

    if (doesExist) return

    const th = document.getElementsByTagName (targetNode)[0]
    const s = document.createElement ('script')

    s.setAttribute ('type', 'text/javascript')

    s.setAttribute ('src', path)

    th.appendChild (s)

}
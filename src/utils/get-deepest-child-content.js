/**
 * @param {HTMLElement} element html element
 * @returns {string} deepest child content
 */
export function getDeepestChildContent (element) {

    let node = element

    while (typeof node.children[0] !== 'undefined') node = node.children[0]

    return node.innerHTML

}
/**
 * @description run a callback on a given interval
 *      only when `window.location.href` has changed
 * @param {Function} callback callback function
 * @param {number} interval repeat frequency
 */
export function onHrefChange (callback, interval = 200) {

    let href = window.location.href

    setInterval (() => {

        const newHref = window.location.href

        if (href === newHref) return

        href = newHref

        callback (href)

    }, interval)

    callback (href)

}
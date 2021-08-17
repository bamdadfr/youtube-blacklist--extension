/**
 * @param callback
 * @param interval
 */
export function onHrefChange (callback, interval = 200) {

    let href = window.location.href

    setInterval (() => {

        const newHref = window.location.href

        if (href === newHref) return

        href = newHref

        callback (href)

    }, interval)

}
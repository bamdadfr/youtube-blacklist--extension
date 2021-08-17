/**
 *
 */
export function detectPage () {

    const { href } = window.location
    const isHome = /youtube(\.com)?\/?$/.exec (href) !== null

    if (isHome) return 'home'

    const isWatch = /youtube(\.com)?\/watch\?v=/.exec (href) !== null

    if (isWatch) return 'watch'

    return null

}
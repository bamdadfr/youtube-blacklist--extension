export const isHome = (url) => /youtube(\.com)?\/?$/.exec (url) !== null

export const isWatch = (url) => /youtube(\.com)?\/watch\?v=/.exec (url) !== null

/**
 *
 */
export function detectPage () {

    const { href } = window.location

    if (isHome (href)) return 'home'

    if (isWatch (href)) return 'watch'

    return null

}
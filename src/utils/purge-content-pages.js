import { detectPage } from './detect-page'
import { appendCloseButton } from './append-close-button'
import { purgePage } from './purge-page'
import { INTERVAL } from './constants'

/**
 *
 */
export function purgeContentPages () {

    const [currentPage] = detectPage ()

    if (
        currentPage === 'watch'
        || currentPage === 'results'
        || currentPage === 'home'
    ) {

        setInterval (async () => {

            await appendCloseButton ()

            await purgePage ()

        }, INTERVAL)

    }

}
import { detectPage } from './detect-page'
import { addCloseButtonToThumbnails } from './add-close-button-to-thumbnails'
import { purgeWatch } from './purge-watch'
import { INTERVAL } from './constants'

/**
 *
 */
export function purgeContentPages () {

    const [currentPage] = detectPage ()

    if (currentPage === 'watch') {

        setInterval (async () => {

            addCloseButtonToThumbnails ()

            await purgeWatch ()

        }, INTERVAL)

    }

}
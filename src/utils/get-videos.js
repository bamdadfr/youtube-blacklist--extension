import { RETRY } from './constants'
import { getState } from './get-state'

/**
 * @returns {Promise<HTMLCollection>} collection of thumbnails (youtube videoCompactRenderer)
 */
export async function getVideos () {

    const retry = (fn) => setTimeout (fn, RETRY)

    const execute = async (resolve) => {

        const { currentPage } = await getState ()

        if (currentPage === 'home') {

            const homeElements = document.getElementsByTagName ('ytd-rich-item-renderer')

            return resolve (homeElements)
        
        }

        if (currentPage === 'results') {

            const resultsElements = document.getElementsByTagName ('ytd-video-renderer')

            return resolve (resultsElements)
        
        }

        if (currentPage === 'watch') {

            const watchElements = document.getElementsByTagName ('ytd-compact-video-renderer')

            return resolve (watchElements)
        
        }

        return retry (() => execute (resolve))
    
    }

    return new Promise ((resolve) => execute (resolve))

}
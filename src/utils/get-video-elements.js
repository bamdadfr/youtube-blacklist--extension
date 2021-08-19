import { RETRY } from './constants'

/**
 * @returns {Promise<HTMLCollection>} collection of thumbnails (youtube videoCompactRenderer)
 */
export async function getVideoElements () {

    const retry = (fn) => setTimeout (fn, RETRY)

    const execute = (resolve) => {

        const homeElements = document.getElementsByTagName ('ytd-rich-item-renderer')
        const resultsElements = document.getElementsByTagName ('ytd-video-renderer')
        const watchElements = document.getElementsByTagName ('ytd-compact-video-renderer')

        if (homeElements.length !== 0) return resolve (homeElements)

        if (resultsElements.length !== 0) return resolve (resultsElements)

        if (watchElements.length !== 0) return resolve (watchElements)

        return retry (() => execute (resolve))
    
    }

    return new Promise ((resolve) => execute (resolve))

}
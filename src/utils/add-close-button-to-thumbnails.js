import { getThumbnails } from './get-thumbnails'
import { CLOSE_BUTTON_ID } from './constants'
import { createCloseButton } from './create-close-button'

/**
 *
 */
export function addCloseButtonToThumbnails () {

    const thumbnails = getThumbnails ()

    Array.from (thumbnails).forEach ((thumbnail) => {

        const alreadyExists = thumbnail.querySelector (`#${CLOSE_BUTTON_ID}`) !== null

        if (alreadyExists) return

        createCloseButton ({
            'parentNode': thumbnail,
        })
    
    })

}
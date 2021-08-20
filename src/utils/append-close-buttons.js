import { getVideoElements } from './get-video-elements'
import { CLOSE_BUTTON_ID } from './constants'
import { createCloseButton } from './create-close-button'

/**
 */
export async function appendCloseButtons () {

    const elements = await getVideoElements ()

    Array.from (elements).forEach ((element) => {

        const alreadyExists = element.querySelector (`#${CLOSE_BUTTON_ID}`) !== null

        if (alreadyExists) return

        createCloseButton ({
            'parentNode': element,
        })
    
    })

}
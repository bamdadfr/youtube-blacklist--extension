import { getThumbnails } from './get-thumbnails'
import { CLOSE_BUTTON_ID } from './constants'
import { getIdFromThumbnail } from './get-id-from-thumbnail'

/**
 *
 */
export function addCloseButtonToThumbnails () {

    const thumbnails = getThumbnails ()

    Array.from (thumbnails).forEach ((thumbnail) => {

        const alreadyExists = thumbnail.querySelector (`#${CLOSE_BUTTON_ID}`) !== null

        if (alreadyExists) return

        const closeButton = document.createElement ('span')
        const thumbnailElement = thumbnail.querySelector ('#thumbnail')

        closeButton.id = CLOSE_BUTTON_ID

        closeButton.onclick = (e) => {

            e.preventDefault ()

            e.stopPropagation ()

            const computedThumbnail = e.currentTarget.parentNode.parentNode.parentNode.parentNode
            const id = getIdFromThumbnail (computedThumbnail)

            console.log (id)

        }

        closeButton.innerHTML =
            '<button>' +
            "    <svg viewBox='0 0 10 10' height='10' width='10'>" +
            "        <polygon points='10 1.4 8.6 0 5 3.6 1.4 0 0 1.4 3.6 5 0 8.6 1.4 10 5 6.4 8.6 10 10 8.6 6.4 5'/>" +
            '    </svg>' +
            '</button>'

        thumbnailElement.prepend (closeButton)
    
    })

}
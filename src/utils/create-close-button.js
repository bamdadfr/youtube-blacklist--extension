import { CLOSE_BUTTON_ID } from './constants'
import { getChannelFromThumbnail } from './get-channel-from-thumbnail'
import { getState } from './get-state'
import { setState } from './set-state'

/**
 * @param {object} params parameters
 * @param {HTMLElement|Element} params.parentNode where to attach the button to
 */
export function createCloseButton ({ parentNode }) {

    const button = document.createElement ('span')

    button.id = CLOSE_BUTTON_ID

    button.innerHTML = `
        <button>
            <svg viewBox="0 0 10 10" height="10" width="10">
                <polygon points="10 1.4 8.6 0 5 3.6 1.4 0 0 1.4 3.6 5 0 8.6 1.4 10 5 6.4 8.6 10 10 8.6 6.4 5"/>
            </svg>
        </button>
    `

    button.onclick = async (e) => {

        e.preventDefault ()

        e.stopPropagation ()

        const channel = await getChannelFromThumbnail (parentNode)
        const { blacklist } = await getState ()

        await setState ('blacklist', { ...blacklist, ...channel })

        await setState ('shouldReload', true)

    }

    const thumbnailElement = parentNode.querySelector ('#thumbnail')

    thumbnailElement.prepend (button)

}
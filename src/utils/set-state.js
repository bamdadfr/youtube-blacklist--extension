import { getBrowser } from './get-browser'

/**
 * @param {string} type action type
 * @param {*} payload action payload
 */
export async function setState (type, payload) {

    const browser = getBrowser ()

    // reducer
    switch (type) {

        case 'shouldReload':
            await browser.storage.local.set ({
                'shouldReload': payload,
            })

            break

        default:
            throw new Error ('state error')

    }

}
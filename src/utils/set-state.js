import { getBrowser } from './get-browser'
import { getState } from './get-state'
import { compareObjects } from './compare-objects'

/**
 * @param {string} type action type
 * @param {*} payload action payload
 */
export async function setState (type, payload) {

    const browser = getBrowser ()
    const state = await getState ()

    switch (type) {

        case 'shouldReload':
            await browser.storage.local.set ({
                'shouldReload': payload,
            })

            break

        case 'blacklist':
            await browser.storage.local.set ({
                'blacklist': payload,
            })

            break

        case 'currentPage':
            await browser.storage.local.set ({
                'currentPage': payload,
            })

            break

        case 'channelsByVideo':

            // return if equal
            if (
                state.channelsByVideo
                && compareObjects (payload, state.channelsByVideo)
            ) return

            await browser.storage.local.set ({
                'channelsByVideo': payload,
            })

            break

        default:
            throw new Error ('state error')

    }

}
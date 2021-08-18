import { getBrowser } from './get-browser'
import { setState } from './set-state'

/**
 * @typedef {boolean} ShouldReload
 * @returns {{ShouldReload}} browser state
 */
export async function getState () {

    const browser = getBrowser ()

    const state = await new Promise ((resolve) => {

        browser.storage.local.get (
            null,
            async (state) => {

                resolve (state)

            },
        )

    })

    if (typeof state.shouldReload === 'undefined') await setState ('shouldReload', false)

    return state

}
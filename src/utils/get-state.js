import { getBrowser } from './get-browser'

/**
 * @typedef {boolean} ShouldReload
 * @returns {{ShouldReload}} browser state
 */
export async function getState () {

    const browser = getBrowser ()
    const { get } = browser?.storage?.local

    if (!get) return

    return await new Promise ((resolve) => {

        browser.storage.local.get (
            null,
            async (state) => {

                resolve (state)

            },
        )

    })

}
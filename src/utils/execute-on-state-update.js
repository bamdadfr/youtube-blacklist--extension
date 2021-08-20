import { getBrowser } from './get-browser'

/**
 * @param {Function} listener with passed `newState`
 */
export function executeOnStateUpdate (listener) {

    const browser = getBrowser ()

    if (!browser.storage.onChanged.hasListener (listener)) {

        browser.storage.onChanged.addListener (listener)

    }

}
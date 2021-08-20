import { executeOnStateUpdate } from './execute-on-state-update'

/**
 * @param {Function} fn callback
 */
export function executeOnBlacklistUpdate (fn) {

    const listener = (newState) => {

        const { blacklist } = newState

        if (!blacklist) return

        const { newValue, oldValue } = blacklist

        if (!blacklist.newValue) return

        fn (newValue, oldValue)

    }

    executeOnStateUpdate (listener)

}
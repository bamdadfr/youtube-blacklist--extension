import { getState } from './get-state'
import { setState } from './set-state'

/**
 *
 */
export async function initializeState () {

    const state = await getState ()

    if (typeof state.shouldReload === 'undefined') {

        await setState ('shouldReload', false)

    }

    if (typeof state.blacklist === 'undefined') {

        await setState ('blacklist', {})

    }

}
import { getIdFromHref } from '../utils/get-id-from-href'
import { getIdFromData } from '../utils/get-id-from-data'
import { injectScript } from '../utils/inject-script'
import { onHrefChange } from '../utils/on-href-change'
import { getState } from '../utils/get-state'
import { setState } from '../utils/set-state'
import { detectPage } from '../utils/detect-page'
import { INTERVAL } from '../utils/constants'
import { purgeWatch } from '../utils/purge-watch'

const initializeContent = async () => {

    // inject `all` script
    injectScript ('inject/all.js')

    // init state
    await getState ()

    const [currentPage] = detectPage ()

    if (currentPage === 'watch') {

        // inject `watch` script
        injectScript ('inject/watch.js')

        // purge on interval
        setInterval (async () => {

            await purgeWatch ()

        }, INTERVAL)
    
    }

}

const watchContent = async () => {

    const idFromHref = await getIdFromHref ()
    const idFromData = await getIdFromData ()
    const shouldReload = idFromHref !== idFromData
    const state = await getState ()

    if (state.shouldReload !== shouldReload) {

        await setState ('shouldReload', shouldReload)

    }

}

window.addEventListener ('load', async () => {

    await initializeContent ()

    onHrefChange (watchContent)

})
import { getBrowser } from '../utils/get-browser'
import { setState } from '../utils/set-state'

(async () => {

    const browser = await getBrowser ()

    browser.storage.onChanged.addListener (async (changes) => {

        if (changes.shouldReload?.newValue === true) {

            await setState ('shouldReload', false)

            await browser.tabs.reload ()

        }

    })

}) ()
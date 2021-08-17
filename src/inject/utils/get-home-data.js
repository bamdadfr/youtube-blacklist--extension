import { extractHomeItem } from './extract-home-item'
import { extractHomeSection } from './extract-home-section'

/**
 *
 */
export function getHomeData () {

    let data = {}
    const elements = window.ytInitialData.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.richGridRenderer.contents

    elements.forEach ((element) => {

        if (element.richItemRenderer) {

            data = {
                ...data,
                ...extractHomeItem (element),
            }

            return

        }

        if (element.richSectionRenderer) {

            data = {
                ...data,
                ...extractHomeSection (element),
            }

        }

    })

    return data

}

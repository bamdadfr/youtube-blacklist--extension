import { parseRendererVideo } from './parse-renderer-video'

/**
 * @param {object} ajaxData from API
 * @returns {object} {video => channel}
 */
export function parseAjaxDataNext (ajaxData) {

    let data = {}

    const { results } = ajaxData
        ?.contents
        ?.twoColumnWatchNextResults
        ?.secondaryResults
        ?.secondaryResults

    if (!results) return data

    results.forEach ((item) => {

        const { compactVideoRenderer } = item

        if (!compactVideoRenderer) return

        data = {
            ...data,
            ...parseRendererVideo (compactVideoRenderer),
        }

    })

    return data

}
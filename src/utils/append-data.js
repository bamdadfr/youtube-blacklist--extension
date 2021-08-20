import { appendBody } from './append-body'
import { compareObjects } from './compare-objects'

/**
 * @description safely append parsed data to body
 * @param {object} params parameters
 * @param {object} params.data json parsed data
 * @param {string} params.id target node id
 * @param {boolean} [params.expand=false] overwrite or merge data?
 */
export function appendData ({
    data,
    id,
    expand = true,
}) {

    const appendedNode = document.getElementById (id)
    let appendedData = undefined

    if (appendedNode) {

        appendedData = JSON.parse (appendedNode.innerHTML)

        // return if objects are equal
        if (compareObjects (data, appendedData)) return

    }

    const dataToAppend = expand && appendedData
        ? { ...appendedData, ...data }
        : data

    appendBody (id, dataToAppend)

}
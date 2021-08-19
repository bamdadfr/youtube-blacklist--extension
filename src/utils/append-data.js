import { appendBody } from './append-body'

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
    expand = false,
}) {

    const appendedNode = document.getElementById (id)
    let appendedData = undefined

    // we want to early return if data did not change
    // todo: traverse comparison or keep length based?
    if (appendedNode) {

        const dataLength = Object.keys (data).length

        appendedData = JSON.parse (appendedNode.innerHTML)

        const appendedDataLength = Object.keys (appendedData).length

        if (dataLength === appendedDataLength) return

    }

    const dataToInject = expand && appendedData
        ? { ...appendedData, ...data }
        : data

    // append to body
    appendBody (id, dataToInject)

}
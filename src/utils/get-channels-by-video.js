import { CHANNELS_BY_VIDEO_ID, RETRY } from './constants'

/**
 * @description scope: extension
 * @returns {object} data {video => channel}
 */
export async function getChannelsByVideo () {

    const retry = (fn) => setTimeout (fn, RETRY)

    const execute = (resolve) => {

        const node = document.getElementById (CHANNELS_BY_VIDEO_ID)

        if (node === null) return retry (() => execute (resolve))

        return resolve (JSON.parse (node.innerHTML))
    
    }

    return new Promise ((resolve) => execute (resolve))

}
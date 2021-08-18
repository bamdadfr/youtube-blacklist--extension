import { DATA_DIV } from './constants'

/**
 * @description scope: extension
 * @returns {object} data {video => channel}
 */
export async function getDataFromBrowser () {

    const retry = (resolve) => setTimeout (resolve, 500)

    const execute = (resolve) => {

        const node = document.getElementById (DATA_DIV)

        if (node === null) return retry (() => execute (resolve))

        return resolve (JSON.parse (node.innerHTML))
    
    }

    return new Promise ((resolve) => execute (resolve))

}
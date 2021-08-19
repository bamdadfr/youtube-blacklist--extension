import { RETRY } from './constants'

/**
 * @description scope: extension
 * @returns {Promise<string>} video id
 */
export async function getIdFromHref () {

    const retry = (fn) => setTimeout (fn, RETRY)

    const execute = (resolve) => {

        try {

            const regex = /v=(.*?)(?=&|$)/
            const matches = regex.exec (window.location.href)

            if (matches === null) return retry (() => execute (resolve))

            return resolve (matches[1])

        } catch {

            return retry (() => execute (resolve))
        
        }

    }

    return new Promise ((resolve) => execute (resolve))

}
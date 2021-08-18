import { appendBody } from './append-body'
import { ID_DIV } from './constants'

/**
 * @description scope: browser
 */
export function defineId () {

    const id = window
        ?.ytInitialPlayerResponse
        ?.videoDetails
        ?.videoId || null

    appendBody (ID_DIV, id)

}
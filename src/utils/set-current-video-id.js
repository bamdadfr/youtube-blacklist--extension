import { appendBody } from './append-body'
import { CURRENT_VIDEO_ID } from './constants'

/**
 * @description scope: browser
 */
export function setCurrentVideoId () {

    const id = window
        ?.ytInitialPlayerResponse
        ?.videoDetails
        ?.videoId || null

    appendBody (CURRENT_VIDEO_ID, id)

}
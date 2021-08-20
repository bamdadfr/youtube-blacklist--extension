import { getChannelsByVideo } from './get-channels-by-video'
import { setState } from './set-state'

/**
 *
 */
export async function setChannelsByVideoState () {

    const channelsByVideo = await getChannelsByVideo ()

    await setState ('channelsByVideo', channelsByVideo)

}
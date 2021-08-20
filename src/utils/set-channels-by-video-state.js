import { getChannelByVideo } from './get-channel-by-video'
import { setState } from './set-state'

/**
 *
 */
export async function setChannelsByVideoState () {

    const channelsByVideo = await getChannelByVideo ()

    await setState ('channelsByVideo', channelsByVideo)

}
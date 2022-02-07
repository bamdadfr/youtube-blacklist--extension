import {VideoRendererInterface} from '../../types';
import {
  ChannelByVideoInterface,
} from '../../channel-by-video/channel-by-video-map';
import {AbstractRendererReducer} from './abstract-renderer.reducer';

/**
 * Video renderer reducer
 * Compatible with `videoRenderer` and `compactVideoRenderer` objects
 */
export class VideoRendererReducer implements AbstractRendererReducer {
  private readonly videoId: VideoRendererInterface['videoId'];

  private readonly channelId: VideoRendererInterface['longBylineText']['runs'][0]['navigationEndpoint']['browseEndpoint']['browseId'];

  public constructor(data: VideoRendererInterface) {
    this.videoId = data.videoId;
    this.channelId = data.longBylineText.runs[0].navigationEndpoint.browseEndpoint.browseId;
  }

  public reduce(): ChannelByVideoInterface {
    return {
      [this.videoId]: this.channelId,
    };
  }
}

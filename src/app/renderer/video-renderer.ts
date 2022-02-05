import {
  ChannelByVideoInterface,
} from '../channel-by-video/channel-by-video-map';

export interface VideoRendererInterface {
  videoId: string;
  longBylineText: {
    runs: Array<{
      text: string;
      navigationEndpoint: {
        browseEndpoint: {
          browseId: string;
          canonicalBaseUrl: string;
        };
      };
    }>;
  };
}

/**
 * Video renderer
 * For `videoRenderer` or `compactVideoRenderer`
 */
export class VideoRenderer {
  private readonly video: VideoRendererInterface['videoId'];

  private readonly channel: VideoRendererInterface['longBylineText']['runs'][0]['navigationEndpoint']['browseEndpoint']['browseId'];

  public constructor(r: VideoRendererInterface) {
    this.video = r.videoId;
    this.channel = r.longBylineText.runs[0].navigationEndpoint.browseEndpoint.browseId;
  }

  public parse(): ChannelByVideoInterface {
    return {
      [this.video]: this.channel,
    };
  }
}

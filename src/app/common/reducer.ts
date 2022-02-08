import {ChannelByVideoInterface} from '../maps/channel-by-video.map';
import {VideoEntity} from '../types';

/**
 * Video renderer reducer
 * Compatible with `videoRenderer` and `compactVideoRenderer` objects
 */
export class Reducer {
  private readonly data: VideoEntity[];

  public constructor(data: VideoEntity[]) {
    this.data = data;
  }

  public reduce(): ChannelByVideoInterface {
    const acc = {};

    if (!this.data) {
      return acc;
    }

    for (let i = 0; i < this.data.length; ++i) {
      const {videoRenderer, compactVideoRenderer} = this.data[i];

      let video;
      if (videoRenderer) {
        video = videoRenderer;
      }

      if (compactVideoRenderer) {
        video = compactVideoRenderer;
      }

      const videoId = video.videoId;
      const channelId = video.longBylineText.runs[0].navigationEndpoint.browseEndpoint.browseId;

      Object.assign(acc, {[videoId]: channelId});
    }

    return acc;
  }
}

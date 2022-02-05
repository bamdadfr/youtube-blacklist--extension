import {VideoRenderer, VideoRendererInterface} from './video-renderer';
import {
  ChannelByVideoInterface,
} from '../channel-by-video/channel-by-video-map';

export interface ShelfRendererInterface {
  content: {
    verticalListRenderer: {
      items: Array<{
        videoRenderer: VideoRendererInterface;
      }>;
    };
  };
}

export class ShelfRenderer {
  private readonly items: ShelfRendererInterface['content']['verticalListRenderer']['items'];

  public constructor(r: ShelfRendererInterface) {
    this.items = r
      ?.content
      ?.verticalListRenderer
      ?.items;
  }

  public parse(): ChannelByVideoInterface {
    if (!this.items) {
      return {};
    }

    return this.items.reduce((acc, {
      videoRenderer,
    }) => {
      const r = new VideoRenderer(videoRenderer);
      Object.assign(acc, r.parse());
      return acc;
    }, {});
  }
}

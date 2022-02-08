import {VideoRendererReducer} from './video-renderer.reducer';
import {ChannelByVideoInterface} from '../../maps/channel-by-video.map';
import {ShelfRendererInterface} from '../../types';
import {AbstractRendererReducer} from './abstract-renderer.reducer';

export class ShelfRendererReducer implements AbstractRendererReducer {
  private readonly renderer: ShelfRendererInterface['content']['verticalListRenderer'];

  public constructor(data: ShelfRendererInterface) {
    this.renderer = data.content.verticalListRenderer;
  }

  public reduce(): ChannelByVideoInterface {
    const data = this.renderer.items;
    const acc = {};

    for (let i = 0; i < data.length; ++i) {
      const {videoRenderer} = data[i];

      if (videoRenderer) {
        const r = new VideoRendererReducer(videoRenderer);
        Object.assign(acc, r.reduce());
      }
    }

    return acc;
  }
}

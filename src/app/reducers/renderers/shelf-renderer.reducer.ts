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
    if (!this.renderer) {
      return {};
    }

    return this.renderer.items.reduce((acc, {
      videoRenderer,
    }) => {
      const r = new VideoRendererReducer(videoRenderer);
      Object.assign(acc, r.reduce());
      return acc;
    }, {});
  }
}

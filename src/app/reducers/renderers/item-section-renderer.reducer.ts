import {AbstractRendererReducer} from './abstract-renderer.reducer';
import {ItemSectionRendererInterface} from '../../types';
import {VideoRendererReducer} from './video-renderer.reducer';
import {ChannelByVideoInterface} from '../../maps/channel-by-video.map';
import {ShelfRendererReducer} from './shelf-renderer.reducer';

export class ItemSectionRendererReducer implements AbstractRendererReducer {
  private readonly renderer: ItemSectionRendererInterface;

  public constructor(data: ItemSectionRendererInterface) {
    this.renderer = data;
  }

  public reduce(): ChannelByVideoInterface {
    return this.renderer.contents.reduce((acc, {
      videoRenderer,
      compactVideoRenderer,
      shelfRenderer,
    }) => {
      if (videoRenderer) {
        const r = new VideoRendererReducer(videoRenderer);
        Object.assign(acc, r.reduce());
      }

      if (compactVideoRenderer) {
        const r = new VideoRendererReducer(compactVideoRenderer);
        Object.assign(acc, r.reduce());
      }

      if (shelfRenderer) {
        const r = new ShelfRendererReducer(shelfRenderer);
        Object.assign(acc, r.reduce());
      }

      return acc;
    }, {});
  }
}

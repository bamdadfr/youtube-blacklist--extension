import {AbstractRendererReducer} from './abstract-renderer.reducer';
import {ContinuationItemsInterface} from '../../types';
import {ChannelByVideoInterface} from '../../maps/channel-by-video.map';
import {VideoRendererReducer} from './video-renderer.reducer';
import {RichItemRendererReducer} from './rich-item-renderer.reducer';
import {ItemSectionRendererReducer} from './item-section-renderer.reducer';

export class ContinuationItemsReducer implements AbstractRendererReducer {
  private readonly items: ContinuationItemsInterface[];

  public constructor(data: ContinuationItemsInterface[]) {
    this.items = data;
  }

  public reduce(): ChannelByVideoInterface {
    const data = this.items;
    const acc = {};

    for (let i = 0; i < data.length; ++i) {
      const {
        richItemRenderer,
        itemSectionRenderer,
        compactVideoRenderer,
      } = data[i];

      if (richItemRenderer) {
        const r = new RichItemRendererReducer(richItemRenderer);
        Object.assign(acc, r.reduce());
      }

      if (itemSectionRenderer) {
        const r = new ItemSectionRendererReducer(itemSectionRenderer);
        Object.assign(acc, r.reduce());
      }

      if (compactVideoRenderer) {
        const r = new VideoRendererReducer(compactVideoRenderer);
        Object.assign(acc, r.reduce());
      }
    }

    return acc;
  }
}

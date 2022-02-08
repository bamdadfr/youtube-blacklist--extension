import {AbstractRendererReducer} from './abstract-renderer.reducer';
import {RichGridRendererInterface} from '../../types';
import {RichItemRendererReducer} from './rich-item-renderer.reducer';
import {RichSectionRendererReducer} from './rich-section-renderer.reducer';
import {ChannelByVideoInterface} from '../../maps/channel-by-video.map';

export class RichGridRendererReducer implements AbstractRendererReducer {
  private readonly renderer: RichGridRendererInterface;

  public constructor(data: RichGridRendererInterface) {
    this.renderer = data;
  }

  public reduce(): ChannelByVideoInterface {
    const acc = {};
    const data = this?.renderer?.contents;

    if (!data) {
      return acc;
    }

    for (let i = 0; i < data.length; ++i) {
      const {richItemRenderer, richSectionRenderer} = data[i];

      if (richItemRenderer) {
        const r = new RichItemRendererReducer(richItemRenderer);
        Object.assign(acc, r.reduce());
      }

      if (richSectionRenderer) {
        const r = new RichSectionRendererReducer(richSectionRenderer);
        Object.assign(acc, r.reduce());
      }
    }

    return acc;
  }
}

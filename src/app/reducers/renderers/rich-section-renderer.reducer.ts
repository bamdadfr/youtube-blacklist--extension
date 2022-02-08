import {RichItemRendererReducer} from './rich-item-renderer.reducer';
import {ChannelByVideoInterface} from '../../maps/channel-by-video.map';
import {RichSectionRendererInterface} from '../../types';
import {AbstractRendererReducer} from './abstract-renderer.reducer';

export class RichSectionRendererReducer implements AbstractRendererReducer {
  private readonly renderer: RichSectionRendererInterface['content']['richShelfRenderer'];

  public constructor(data: RichSectionRendererInterface) {
    this.renderer = data.content.richShelfRenderer;
  }

  public reduce(): ChannelByVideoInterface {
    const data = this.renderer.contents;
    const acc = {};

    for (let i = 0; i < data.length; ++i) {
      const {richItemRenderer} = data[i];

      if (richItemRenderer) {
        const r = new RichItemRendererReducer(richItemRenderer);
        Object.assign(acc, r.reduce());
      }
    }

    return acc;
  }
}

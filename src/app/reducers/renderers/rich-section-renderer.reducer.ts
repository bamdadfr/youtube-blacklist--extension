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
    if (!this.renderer) {
      return {};
    }

    return this.renderer.contents.reduce((acc, {richItemRenderer}) => {
      const r = new RichItemRendererReducer(richItemRenderer);
      Object.assign(acc, r.reduce());
      return acc;
    }, {});
  }
}

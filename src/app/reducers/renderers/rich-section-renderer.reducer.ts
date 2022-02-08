import {RichItemRendererReducer} from './rich-item-renderer.reducer';
import {ChannelByVideoInterface} from '../../maps/channel-by-video.map';
import {RichSectionRendererInterface} from '../../types';
import {AbstractRendererReducer} from './abstract-renderer.reducer';

export class RichSectionRendererReducer implements AbstractRendererReducer {
  private readonly data: RichSectionRendererInterface;

  public constructor(data: RichSectionRendererInterface) {
    this.data = data;
  }

  public reduce(): ChannelByVideoInterface {
    const acc = {};
    const data = this?.data?.content?.richShelfRenderer?.contents;

    if (!data) {
      return acc;
    }

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

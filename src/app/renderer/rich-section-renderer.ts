import {RichItemRenderer} from './rich-item-renderer';
import {
  ChannelByVideoInterface,
} from '../channel-by-video/channel-by-video-map';
import {RichSectionRendererInterface} from '../types';

export class RichSectionRenderer {
  private readonly contents: RichSectionRendererInterface['content']['richShelfRenderer']['contents'] = [];

  public constructor(r: RichSectionRendererInterface) {
    this.contents = r
      ?.content
      ?.richShelfRenderer
      ?.contents;
  }

  public parse(): ChannelByVideoInterface {
    if (!this.contents) {
      return {};
    }

    return this.contents.reduce((acc, {richItemRenderer}) => {
      const r = new RichItemRenderer(richItemRenderer);
      Object.assign(acc, r.parse());
      return acc;
    }, {});
  }
}

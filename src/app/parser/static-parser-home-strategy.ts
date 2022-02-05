import {StaticParserStrategy} from './static-parser';
import {
  ChannelByVideoInterface,
} from '../channel-by-video/channel-by-video-map';
import {
  RichItemRenderer,
  RichItemRendererInterface,
} from '../renderer/rich-item-renderer';
import {
  RichSectionRenderer,
  RichSectionRendererInterface,
} from '../renderer/rich-section-renderer';

type StaticParserHomeContents = Array<{
  richItemRenderer: RichItemRendererInterface;
  richSectionRenderer: RichSectionRendererInterface;
}>

export class StaticParserHomeStrategy implements StaticParserStrategy {
  private contents: StaticParserHomeContents;

  public constructor() {
    this.contents = window
      ?.ytInitialData
      ?.contents
      ?.twoColumnBrowseResultsRenderer
      ?.tabs
      ?.[0]
      ?.tabRenderer
      ?.content
      ?.richGridRenderer
      ?.contents;
  }

  public parse(): ChannelByVideoInterface {
    const payload = {};

    if (this.contents) {
      Object.assign(payload, this.parseContents());
    }

    return payload;
  }

  private parseContents() {
    return this.contents.reduce((acc, {
      richItemRenderer,
      richSectionRenderer,
    }) => {
      if (richItemRenderer) {
        const r = new RichItemRenderer(richItemRenderer);
        Object.assign(acc, r.parse());
      }

      if (richSectionRenderer) {
        const r = new RichSectionRenderer(richSectionRenderer);
        Object.assign(acc, r.parse());
      }

      return acc;
    }, {});
  }
}

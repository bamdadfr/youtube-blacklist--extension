import {StaticParserStrategy} from './static-parser';
import {
  ChannelByVideoInterface,
} from '../channel-by-video/channel-by-video-map';
import {ItemSectionRendererInterface} from '../types';
import {VideoRenderer} from '../renderer/video-renderer';
import {ShelfRenderer} from '../renderer/shelf-renderer';

type StaticParserSearchContents = ItemSectionRendererInterface['contents']

export class StaticParserSearchStrategy implements StaticParserStrategy {
  private contents: StaticParserSearchContents;

  public constructor() {
    this.contents = window
      ?.ytInitialData
      ?.contents
      ?.twoColumnSearchResultsRenderer
      ?.primaryContents
      ?.sectionListRenderer
      ?.contents
      ?.[0]
      ?.itemSectionRenderer
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
      videoRenderer,
      shelfRenderer,
      compactVideoRenderer,
    }) => {
      if (videoRenderer) {
        const r = new VideoRenderer(videoRenderer);
        Object.assign(acc, r.parse());
      }

      if (shelfRenderer) {
        const r = new ShelfRenderer(shelfRenderer);
        Object.assign(acc, r.parse());
      }

      if (compactVideoRenderer) {
        // TODO: Implement
        throw new Error('Not implemented');
      }

      return acc;
    }, {});
  }
}

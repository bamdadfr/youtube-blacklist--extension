import {StaticParserStrategy} from './static-parser';
import {
  ChannelByVideoInterface,
} from '../channel-by-video/channel-by-video-map';
import {
  ItemSectionRendererInterface,
  TwoColumnWatchNextResultsInterface,
} from '../types';
import {VideoRenderer} from '../renderer/video-renderer';
import {ShelfRenderer} from '../renderer/shelf-renderer';

// Logged out data
type StaticParserWatchResults = TwoColumnWatchNextResultsInterface['secondaryResults']['secondaryResults']['results']

// Logged in data
type StaticParserWatchContents = ItemSectionRendererInterface['contents']

export class StaticParserWatchStrategy implements StaticParserStrategy {
  private readonly results: StaticParserWatchResults;

  private readonly contents: StaticParserWatchContents;

  public constructor() {
    this.results = window
      ?.ytInitialData
      ?.contents
      ?.twoColumnWatchNextResults
      ?.secondaryResults
      ?.secondaryResults
      ?.results;

    this.contents = window
      ?.ytInitialData
      ?.contents
      ?.twoColumnWatchNextResults
      ?.secondaryResults
      ?.secondaryResults
      ?.results
      ?.[1]
      ?.itemSectionRenderer
      ?.contents;
  }

  public parse(): ChannelByVideoInterface {
    const payload = {};

    if (this.results) {
      Object.assign(payload, this.parseResults());
    }

    if (this.contents) {
      Object.assign(payload, this.parseContents());
    }

    return payload;
  }

  private parseResults() {
    return this.results.reduce((acc, {
      compactVideoRenderer,
      itemSectionRenderer,
    }) => {
      if (compactVideoRenderer) {
        const r = new VideoRenderer(compactVideoRenderer);
        Object.assign(acc, r.parse());
      }

      if (itemSectionRenderer) {
        throw new Error('Not implemented');
      }

      return acc;
    }, {});
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
        throw new Error('Not implemented');
      }

      return acc;
    }, {});
  }
}

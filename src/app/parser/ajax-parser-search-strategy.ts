import {
  ChannelByVideoInterface,
} from '../channel-by-video/channel-by-video-map';
import {ItemSectionRendererInterface, YoutubeResponseData} from '../types';
import {VideoRenderer} from '../renderer/video-renderer';
import {ShelfRenderer} from '../renderer/shelf-renderer';
import {AjaxParserStrategy} from './ajax-parser';

type AjaxParserSearchContents = ItemSectionRendererInterface['contents']
type AjaxParserSearchContinuationItems = ItemSectionRendererInterface['contents']

export class AjaxParserSearchStrategy implements AjaxParserStrategy {
  private readonly contents: AjaxParserSearchContents;

  private readonly continuationItems: AjaxParserSearchContinuationItems;

  public constructor(data: YoutubeResponseData) {
    this.contents = data
      ?.contents
      ?.twoColumnSearchResultsRenderer
      ?.primaryContents
      ?.sectionListRenderer
      ?.contents
      ?.[0]
      ?.itemSectionRenderer
      ?.contents;

    this.continuationItems = data
      ?.onResponseReceivedCommands
      ?.[0]
      ?.appendContinuationItemsAction
      ?.continuationItems
      ?.[0]
      ?.itemSectionRenderer
      ?.contents;
  }

  public parse(): ChannelByVideoInterface {
    const payload = {};

    if (this.contents) {
      Object.assign(payload, this.parseContents());
    }

    if (this.continuationItems) {
      Object.assign(payload, this.parseContinuationItems());
    }

    return payload;
  }

  private parseContents() {
    return this.contents.reduce((acc, {
      videoRenderer,
      shelfRenderer,
    }) => {
      if (videoRenderer) {
        const r = new VideoRenderer(videoRenderer);
        Object.assign(acc, r.parse());
      }

      if (shelfRenderer) {
        const r = new ShelfRenderer(shelfRenderer);
        Object.assign(acc, r.parse());
      }

      return acc;
    }, {});
  }

  private parseContinuationItems() {
    return this.continuationItems.reduce((acc, {videoRenderer}) => {
      if (videoRenderer) {
        const r = new VideoRenderer(videoRenderer);
        Object.assign(acc, r.parse());
      }

      return acc;
    }, {});
  }
}

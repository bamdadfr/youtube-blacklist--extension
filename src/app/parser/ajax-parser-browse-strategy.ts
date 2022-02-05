import {
  ChannelByVideoInterface,
} from '../channel-by-video/channel-by-video-map';
import {
  AppendContinuationItemsAction,
  TwoColumnBrowseResultsRendererInterface,
  YoutubeResponseData,
} from '../types';
import {AjaxParserStrategy} from './ajax-parser';
import {RichItemRenderer} from '../renderer/rich-item-renderer';
import {RichSectionRenderer} from '../renderer/rich-section-renderer';

type AjaxParserBrowseContents = TwoColumnBrowseResultsRendererInterface['tabs'][0]['tabRenderer']['content']['richGridRenderer']['contents'];

type AjaxParserBrowseContinuationItems = AppendContinuationItemsAction['continuationItems'];

export class AjaxParserBrowseStrategy implements AjaxParserStrategy {
  private readonly contents: AjaxParserBrowseContents;

  private readonly continuationItems: AjaxParserBrowseContinuationItems;

  public constructor(data: YoutubeResponseData) {
    this.contents = data
      ?.contents
      ?.twoColumnBrowseResultsRenderer
      ?.tabs
      ?.[0]
      ?.tabRenderer
      ?.content
      ?.richGridRenderer
      ?.contents;

    this.continuationItems = data
      ?.onResponseReceivedActions
      ?.[0]
      ?.appendContinuationItemsAction
      ?.continuationItems;
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

  private parseContinuationItems() {
    return this.continuationItems.reduce((acc, {
      richItemRenderer,
    }) => {
      if (richItemRenderer) {
        const r = new RichItemRenderer(richItemRenderer);
        Object.assign(acc, r.parse());
      }

      return acc;
    }, {});
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

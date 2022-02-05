import {
  ChannelByVideoInterface,
} from '../channel-by-video/channel-by-video-map';
import {
  AppendContinuationItemsAction,
  ItemSectionRendererInterface,
  TwoColumnWatchNextResultsInterface,
  YoutubeResponseData,
} from '../types';
import {VideoRenderer} from '../renderer/video-renderer';
import {AjaxParserStrategy} from './ajax-parser';

type AjaxParserNextResults = TwoColumnWatchNextResultsInterface['secondaryResults']['secondaryResults']['results'];
type AjaxParserNextContinuationItems = AppendContinuationItemsAction['continuationItems'];

export class AjaxParserNextStrategy implements AjaxParserStrategy {
  private readonly results: AjaxParserNextResults;

  private readonly continuationItems: AjaxParserNextContinuationItems;

  public constructor(data: YoutubeResponseData) {
    this.results = data
      ?.contents
      ?.twoColumnWatchNextResults
      ?.secondaryResults
      ?.secondaryResults
      ?.results;

    this.continuationItems = data
      ?.onResponseReceivedEndpoints
      ?.[0]
      ?.appendContinuationItemsAction
      ?.continuationItems;
  }

  public parse(): ChannelByVideoInterface {
    const payload = {};

    if (this.results) {
      Object.assign(payload, this.parseResults());
    }

    if (this.continuationItems) {
      Object.assign(payload, this.parseContinuationItems());
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
        Object.assign(acc, this.parseItemSectionRenderer(itemSectionRenderer));
      }

      return acc;
    }, {});
  }

  private parseItemSectionRenderer(itemSectionRenderer: ItemSectionRendererInterface) {
    return itemSectionRenderer.contents.reduce((acc, {compactVideoRenderer}) => {
      if (compactVideoRenderer) {
        const r = new VideoRenderer(compactVideoRenderer);
        Object.assign(acc, r.parse());
      }

      return acc;
    }, {});
  }

  private parseContinuationItems() {
    return this.continuationItems.reduce((acc, {
      compactVideoRenderer,
    }) => {
      if (compactVideoRenderer) {
        const r = new VideoRenderer(compactVideoRenderer);
        Object.assign(acc, r.parse());
      }

      return acc;
    }, {});
  }
}

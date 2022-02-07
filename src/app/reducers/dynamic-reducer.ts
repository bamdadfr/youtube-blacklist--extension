import {ItemSectionRendererInterface, YoutubeResponseData} from '../types';
import {RichItemRenderer} from '../renderer/rich-item-renderer';
import {RichSectionRenderer} from '../renderer/rich-section-renderer';
import {VideoRenderer} from '../renderer/video-renderer';
import {ShelfRenderer} from '../renderer/shelf-renderer';

type videoId = string;
type channelId = string;

interface ReducerMap {
  [key: videoId]: channelId;
}

export class DynamicReducer {
  private readonly dict;

  public constructor(data: YoutubeResponseData) {
    this.dict = {
      browse: {
        renderer: data
          ?.contents
          ?.twoColumnBrowseResultsRenderer
          ?.tabs
          ?.[0]
          ?.tabRenderer
          ?.content
          ?.richGridRenderer
          ?.contents,
        continuation: data
          ?.onResponseReceivedActions
          ?.[0]
          ?.appendContinuationItemsAction
          ?.continuationItems,
      },
      search: {
        renderer: data
          ?.contents
          ?.twoColumnSearchResultsRenderer
          ?.primaryContents
          ?.sectionListRenderer
          ?.contents
          ?.[0]
          ?.itemSectionRenderer
          ?.contents,
        continuation: data
          ?.onResponseReceivedCommands
          ?.[0]
          ?.appendContinuationItemsAction
          ?.continuationItems
          ?.[0]
          ?.itemSectionRenderer
          ?.contents,
      },
      next: {
        renderer: data
          ?.contents
          ?.twoColumnWatchNextResults
          ?.secondaryResults
          ?.secondaryResults
          ?.results,
        continuation: data
          ?.onResponseReceivedEndpoints
          ?.[0]
          ?.appendContinuationItemsAction
          ?.continuationItems,
      },
    };
  }

  public reduce(): ReducerMap {
    const map: ReducerMap = {};

    if (this.dict.browse.renderer) {
      Object.assign(map, this.reduceBrowse());
    }

    if (this.dict.browse.continuation) {
      Object.assign(map, this.reduceBrowseContinuation());
    }

    if (this.dict.search.renderer) {
      Object.assign(map, this.reduceSearch());
    }

    if (this.dict.search.continuation) {
      Object.assign(map, this.reduceSearchContinuation());
    }

    if (this.dict.next.renderer) {
      Object.assign(map, this.reduceNext());
    }

    if (this.dict.next.continuation) {
      Object.assign(map, this.reduceNextContinuation());
    }

    return map;
  }

  private reduceBrowse() {
    return this.dict.browse.renderer.reduce((acc, {
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

  private reduceBrowseContinuation() {
    return this.dict.browse.continuation.reduce((acc, {
      richItemRenderer,
    }) => {
      if (richItemRenderer) {
        const r = new RichItemRenderer(richItemRenderer);
        Object.assign(acc, r.parse());
      }

      return acc;
    }, {});
  }

  private reduceSearch() {
    return this.dict.search.renderer.reduce((acc, {
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

  private reduceSearchContinuation() {
    return this.dict.search.continuation.reduce((acc, {videoRenderer}) => {
      if (videoRenderer) {
        const r = new VideoRenderer(videoRenderer);
        Object.assign(acc, r.parse());
      }

      return acc;
    }, {});
  }

  private reduceNext() {
    return this.dict.next.renderer.reduce((acc, {
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

  private reduceNextContinuation() {
    return this.dict.next.continuation.reduce((acc, {
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

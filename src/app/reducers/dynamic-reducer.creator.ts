import {YoutubeResponseData} from '../types';
import {
  TwoColumnWatchNextResultsReducer,
} from './renderers/two-column-watch-next-results.reducer';
import {RichGridRendererReducer} from './renderers/rich-grid-renderer.reducer';
import {
  ItemSectionRendererReducer,
} from './renderers/item-section-renderer.reducer';
import {ContinuationItemsReducer} from './renderers/continuation-items.reducer';
import {AbstractReducerCreator} from './abstract-reducer.creator';

type videoId = string;
type channelId = string;

interface ReducerMap {
  [key: videoId]: channelId;
}

export class DynamicReducerCreator extends AbstractReducerCreator {
  private readonly dict;

  public constructor(data: YoutubeResponseData) {
    super();
    this.dict = {
      browse: {
        renderer: data
          ?.contents
          ?.twoColumnBrowseResultsRenderer
          ?.tabs
          ?.[0]
          ?.tabRenderer
          ?.content
          ?.richGridRenderer,
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
          ?.itemSectionRenderer,
        continuation: data
          ?.onResponseReceivedCommands
          ?.[0]
          ?.appendContinuationItemsAction
          ?.continuationItems
          ?.[0]
          ?.itemSectionRenderer,
      },
      next: {
        renderer: data
          ?.contents
          ?.twoColumnWatchNextResults,
        // ?.secondaryResults
        // ?.secondaryResults
        // ?.results,
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
      const r = new RichGridRendererReducer(this.dict.browse.renderer);
      Object.assign(map, r.reduce());
    }

    if (this.dict.browse.continuation) {
      const r = new ContinuationItemsReducer(this.dict.browse.continuation);
      Object.assign(map, r.reduce());
    }

    if (this.dict.search.renderer) {
      const r = new ItemSectionRendererReducer(this.dict.search.renderer);
      Object.assign(map, r.reduce());
    }

    if (this.dict.search.continuation) {
      const r = new ItemSectionRendererReducer(this.dict.search.continuation);
      Object.assign(map, r.reduce());
    }

    if (this.dict.next.renderer) {
      const r = new TwoColumnWatchNextResultsReducer(this.dict.next.renderer);
      Object.assign(map, r.reduce());
    }

    if (this.dict.next.continuation) {
      const r = new ContinuationItemsReducer(this.dict.next.continuation);
      Object.assign(map, r.reduce());
    }

    return map;
  }
}

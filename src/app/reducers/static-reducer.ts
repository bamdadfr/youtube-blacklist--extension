import {RichGridRendererReducer} from './renderers/rich-grid-renderer-reducer';
import {
  ItemSectionRendererReducer,
} from './renderers/item-section-renderer-reducer';
import {
  TwoColumnWatchNextResultsReducer,
} from './renderers/two-column-watch-next-results-reducer';

type videoId = string;
type channelId = string;

interface ReducerMap {
  [key: videoId]: channelId;
}

export class StaticReducer {
  private readonly dict = {
    home: window
      ?.ytInitialData
      ?.contents
      ?.twoColumnBrowseResultsRenderer
      ?.tabs
      ?.[0]
      ?.tabRenderer
      ?.content
      ?.richGridRenderer,
    search: window
      ?.ytInitialData
      ?.contents
      ?.twoColumnSearchResultsRenderer
      ?.primaryContents
      ?.sectionListRenderer
      ?.contents
      ?.[0]
      ?.itemSectionRenderer,
    watch: {
      loggedOut: window
        ?.ytInitialData
        ?.contents
        ?.twoColumnWatchNextResults,
      // ?.secondaryResults
      // ?.secondaryResults
      // ?.results,
      loggedIn: window
        ?.ytInitialData
        ?.contents
        ?.twoColumnWatchNextResults
        ?.secondaryResults
        ?.secondaryResults
        ?.results
        ?.[1]
        ?.itemSectionRenderer,
    },
  };

  public reduce(): ReducerMap {
    const map: ReducerMap = {};

    if (this.dict.home) {
      const r = new RichGridRendererReducer(this.dict.home);
      Object.assign(map, r.reduce());
    }

    if (this.dict.search) {
      const r = new ItemSectionRendererReducer(this.dict.search);
      Object.assign(map, r.reduce());
    }

    if (this.dict.watch.loggedOut) {
      const r = new TwoColumnWatchNextResultsReducer(this.dict.watch.loggedOut);
      Object.assign(map, r.reduce());
    }

    if (this.dict.watch.loggedIn) {
      const r = new ItemSectionRendererReducer(this.dict.watch.loggedIn);
      Object.assign(map, r.reduce());
    }

    return map;
  }
}

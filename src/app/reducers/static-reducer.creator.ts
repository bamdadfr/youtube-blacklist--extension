import {AbstractReducerCreator} from './abstract-reducer.creator';
import {RichGridRendererReducer} from './renderers/rich-grid-renderer.reducer';
import {
  ItemSectionRendererReducer,
} from './renderers/item-section-renderer.reducer';
import {
  TwoColumnWatchNextResultsReducer,
} from './renderers/two-column-watch-next-results.reducer';
import {ChannelByVideoInterface} from '../maps/channel-by-video.map';
import {ShelfRendererReducer} from './renderers/shelf-renderer.reducer';

export class StaticReducerCreator extends AbstractReducerCreator {
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
    explore: window
      ?.ytInitialData
      ?.contents
      ?.twoColumnBrowseResultsRenderer
      ?.tabs
      ?.[0]
      ?.tabRenderer
      ?.content
      ?.sectionListRenderer
      ?.contents
      ?.[1]
      ?.itemSectionRenderer
      ?.contents
      ?.[0]
      ?.shelfRenderer,
  };

  public reduce(): ChannelByVideoInterface {
    const map: ChannelByVideoInterface = {};

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

    if (this.dict.explore) {
      const r = new ShelfRendererReducer(this.dict.explore);
      Object.assign(map, r.reduce());
    }

    return map;
  }
}

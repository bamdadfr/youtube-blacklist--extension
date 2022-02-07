import {RichItemRenderer} from '../renderer/rich-item-renderer';
import {RichSectionRenderer} from '../renderer/rich-section-renderer';
import {VideoRenderer} from '../renderer/video-renderer';
import {ShelfRenderer} from '../renderer/shelf-renderer';

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
      ?.richGridRenderer
      ?.contents,
    search: window
      ?.ytInitialData
      ?.contents
      ?.twoColumnSearchResultsRenderer
      ?.primaryContents
      ?.sectionListRenderer
      ?.contents
      ?.[0]
      ?.itemSectionRenderer
      ?.contents,
    watch: {
      loggedOut: window
        ?.ytInitialData
        ?.contents
        ?.twoColumnWatchNextResults
        ?.secondaryResults
        ?.secondaryResults
        ?.results,
      loggedIn: window
        ?.ytInitialData
        ?.contents
        ?.twoColumnWatchNextResults
        ?.secondaryResults
        ?.secondaryResults
        ?.results
        ?.[1]
        ?.itemSectionRenderer
        ?.contents,
    },
  };

  public reduce(): ReducerMap {
    const map: ReducerMap = {};

    if (this.dict.home) {
      Object.assign(map, this.reduceHome());
    }

    if (this.dict.search) {
      Object.assign(map, this.reduceSearch());
    }

    if (this.dict.watch.loggedOut) {
      Object.assign(map, this.reduceWatchLoggedOut());
    }

    if (this.dict.watch.loggedIn) {
      Object.assign(map, this.reduceWatchLoggedIn());
    }

    return map;
  }

  private reduceHome(): ReducerMap {
    return this.dict.home.reduce((acc, {
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

  private reduceSearch(): ReducerMap {
    return this.dict.search.reduce((acc, {
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

  private reduceWatchLoggedOut(): ReducerMap {
    return this.dict.watch.loggedOut.reduce((acc, {
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

  private reduceWatchLoggedIn(): ReducerMap {
    return this.dict.watch.loggedIn.reduce((acc, {
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

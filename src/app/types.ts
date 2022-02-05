import {VideoRendererInterface} from './renderer/video-renderer';
import {ShelfRendererInterface} from './renderer/shelf-renderer';
import {RichItemRendererInterface} from './renderer/rich-item-renderer';
import {RichSectionRendererInterface} from './renderer/rich-section-renderer';

/**
 * ------ Youtube ------
 */

// Youtube data common interfaces
export interface ItemSectionRendererInterface {
  contents: Array<{
    videoRenderer: VideoRendererInterface;
    compactVideoRenderer: VideoRendererInterface;
    shelfRenderer: ShelfRendererInterface;
    channelRenderer: void; // not used
  }>;
}

export interface TwoColumnBrowseResultsRendererInterface {
  tabs: Array<{
    tabRenderer: {
      content: {
        richGridRenderer: {
          contents: Array<{
            richItemRenderer: RichItemRendererInterface;
            richSectionRenderer: RichSectionRendererInterface;
          }>;
        };
      };
    };
  }>;
}

interface TwoColumnSearchResultsRendererInterface {
  primaryContents: {
    sectionListRenderer: {
      contents: Array<{
        itemSectionRenderer: ItemSectionRendererInterface;
      }>;
    };
  };
}

export interface TwoColumnWatchNextResultsInterface {
  secondaryResults: {
    secondaryResults: {
      results: Array<{
        // user logged out
        compactVideoRenderer: VideoRendererInterface;
        // user logged in
        itemSectionRenderer: ItemSectionRendererInterface;
      }>;
    };
  };
}

// Youtube Initial Data, Contains the initial data within the Youtube page
export interface YoutubeInitialData {
  contents: {
    // home
    twoColumnBrowseResultsRenderer: TwoColumnBrowseResultsRendererInterface;
    // search
    twoColumnSearchResultsRenderer: TwoColumnSearchResultsRendererInterface;
    // results
    twoColumnWatchNextResults: TwoColumnWatchNextResultsInterface;
  };
}

export interface AppendContinuationItemsAction {
  continuationItems: Array<{
    richItemRenderer: RichItemRendererInterface;
    itemSectionRenderer: ItemSectionRendererInterface;
    compactVideoRenderer: VideoRendererInterface;
  }>;
}

// Youtube Response Data, contains the data that is returned by the Youtube API
export interface YoutubeResponseData {
  contents: {
    // /v1/browse - on navigation
    twoColumnBrowseResultsRenderer: TwoColumnBrowseResultsRendererInterface;
    // /v1/search - on navigation
    twoColumnSearchResultsRenderer: TwoColumnSearchResultsRendererInterface;
    // v1/next - on navigation
    twoColumnWatchNextResults: TwoColumnWatchNextResultsInterface;
  };
  // /v1/browse - on scroll
  onResponseReceivedActions: Array<{
    appendContinuationItemsAction: AppendContinuationItemsAction;
  }>;
  // /v1/search - on scroll
  onResponseReceivedCommands: Array<{
    appendContinuationItemsAction: AppendContinuationItemsAction;
  }>;
  // v1/next - on scroll
  onResponseReceivedEndpoints: Array<{
    appendContinuationItemsAction: AppendContinuationItemsAction;
  }>;
}

/**
 * ------ Global ------
 */

declare global {
  interface Window {
    ytInitialData: YoutubeInitialData;
  }
}

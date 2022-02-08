/**
 * ------ Youtube ------
 */

// Youtube data common interfaces
export interface VideoRendererInterface {
  videoId: string;
  longBylineText: {
    runs: Array<{
      text: string;
      navigationEndpoint: {
        browseEndpoint: {
          browseId: string;
          canonicalBaseUrl: string;
        };
      };
    }>;
  };
}

export interface RichItemRendererInterface {
  content: {
    videoRenderer: VideoRendererInterface;
  };
}

export interface VerticalListRenderInterface {
  items: Array<{
    videoRenderer: VideoRendererInterface;
  }>;
}

export interface ExpandedShelfContentsRendererInterface {
  items: Array<{
    videoRenderer: VideoRendererInterface;
  }>;
}

export interface ShelfRendererInterface {
  content: {
    verticalListRenderer: VerticalListRenderInterface;
    expandedShelfContentsRenderer: ExpandedShelfContentsRendererInterface;
  };
}

export interface RichSectionRendererInterface {
  content: {
    richShelfRenderer: {
      contents: Array<{
        richItemRenderer: RichItemRendererInterface;
      }>;
    };
  };
}

export interface ItemSectionRendererInterface {
  contents: Array<{
    videoRenderer: VideoRendererInterface;
    compactVideoRenderer: VideoRendererInterface;
    shelfRenderer: ShelfRendererInterface;
    channelRenderer: void; // not used
  }>;
}

export interface RichGridRendererInterface {
  contents: Array<{
    richItemRenderer: RichItemRendererInterface;
    richSectionRenderer: RichSectionRendererInterface;
  }>;
}

export interface SectionListRendererInterface {
  contents: Array<{
    itemSectionRenderer: ItemSectionRendererInterface;
  }>;
}

export interface TwoColumnBrowseResultsRendererInterface {
  tabs: Array<{
    tabRenderer: {
      content: {
        richGridRenderer: RichGridRendererInterface;
        sectionListRenderer: SectionListRendererInterface;
      };
    };
  }>;
}

interface TwoColumnSearchResultsRendererInterface {
  primaryContents: {
    sectionListRenderer: SectionListRendererInterface;
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

// Youtube Initial Data, Contains the initial data within the Youtube handlers
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

export interface ContinuationItemsInterface {
  richItemRenderer: RichItemRendererInterface;
  itemSectionRenderer: ItemSectionRendererInterface;
  compactVideoRenderer: VideoRendererInterface;
}

export interface AppendContinuationItemsAction {
  continuationItems: ContinuationItemsInterface[];
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

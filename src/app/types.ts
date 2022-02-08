interface VideoRendererInterface {
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

export interface VideoEntity {
  videoRenderer: VideoRendererInterface;
  compactVideoRenderer: VideoRendererInterface;
}

declare global {
  // noinspection JSUnusedGlobalSymbols
  interface Window {
    ytInitialData: {
      contents: unknown;
    };
  }
}

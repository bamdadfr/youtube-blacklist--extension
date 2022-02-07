import {AbstractRendererReducer} from './abstract-renderer.reducer';
import {TwoColumnWatchNextResultsInterface} from '../../types';
import {
  ChannelByVideoInterface,
} from '../../channel-by-video/channel-by-video-map';
import {VideoRendererReducer} from './video-renderer.reducer';
import {ItemSectionRendererReducer} from './item-section-renderer.reducer';

export class TwoColumnWatchNextResultsReducer implements AbstractRendererReducer {
  private readonly results: TwoColumnWatchNextResultsInterface['secondaryResults']['secondaryResults']['results'];

  public constructor(data: TwoColumnWatchNextResultsInterface) {
    this.results = data.secondaryResults.secondaryResults.results;
  }

  public reduce(): ChannelByVideoInterface {
    return this.results.reduce((acc, {
      compactVideoRenderer,
      itemSectionRenderer,
    }) => {
      if (compactVideoRenderer) {
        const r = new VideoRendererReducer(compactVideoRenderer);
        Object.assign(acc, r.reduce());
      }

      if (itemSectionRenderer) {
        const r = new ItemSectionRendererReducer(itemSectionRenderer);
        Object.assign(acc, r.reduce());
      }

      return acc;
    }, {});
  }
}

import {AbstractRendererReducer} from './abstract-renderer.reducer';
import {TwoColumnWatchNextResultsInterface} from '../../types';
import {ChannelByVideoInterface} from '../../maps/channel-by-video.map';
import {VideoRendererReducer} from './video-renderer.reducer';
import {ItemSectionRendererReducer} from './item-section-renderer.reducer';

export class TwoColumnWatchNextResultsReducer implements AbstractRendererReducer {
  private readonly data: TwoColumnWatchNextResultsInterface;

  public constructor(data: TwoColumnWatchNextResultsInterface) {
    this.data = data;
  }

  public reduce(): ChannelByVideoInterface {
    const acc = {};
    const data = this?.data?.secondaryResults?.secondaryResults?.results;

    if (!data) {
      return acc;
    }

    for (let i = 0; i < data.length; ++i) {
      const {compactVideoRenderer, itemSectionRenderer} = data[i];

      if (compactVideoRenderer) {
        const r = new VideoRendererReducer(compactVideoRenderer);
        Object.assign(acc, r.reduce());
      }

      if (itemSectionRenderer) {
        const r = new ItemSectionRendererReducer(itemSectionRenderer);
        Object.assign(acc, r.reduce());
      }
    }

    return acc;
  }
}

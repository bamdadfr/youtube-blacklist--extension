import {VideoRendererReducer} from './video-renderer.reducer';
import {ChannelByVideoInterface} from '../../maps/channel-by-video.map';
import {VerticalListRenderInterface} from '../../types';
import {AbstractRendererReducer} from './abstract-renderer.reducer';

export class VerticalListRendererReducer implements AbstractRendererReducer {
  private readonly renderer: VerticalListRenderInterface;

  public constructor(data: VerticalListRenderInterface) {
    this.renderer = data;
  }

  public reduce(): ChannelByVideoInterface {
    const acc = {};
    const data = this?.renderer?.items;

    if (!data) {
      return acc;
    }

    for (let i = 0; i < data.length; ++i) {
      const {videoRenderer} = data[i];

      if (videoRenderer) {
        const r = new VideoRendererReducer(videoRenderer);
        Object.assign(acc, r.reduce());
      }
    }

    return acc;
  }
}

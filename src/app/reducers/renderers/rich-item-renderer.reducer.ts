import {RichItemRendererInterface} from '../../types';
import {VideoRendererReducer} from './video-renderer.reducer';
import {ChannelByVideoInterface} from '../../maps/channel-by-video.map';
import {AbstractRendererReducer} from './abstract-renderer.reducer';

export class RichItemRendererReducer implements AbstractRendererReducer {
  private readonly data: RichItemRendererInterface;

  public constructor(data: RichItemRendererInterface) {
    this.data = data;
  }

  public reduce(): ChannelByVideoInterface {
    const data = this?.data?.content?.videoRenderer;

    if (!data) {
      return {};
    }

    const r = new VideoRendererReducer(data);
    return r.reduce();
  }
}

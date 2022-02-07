import {RichItemRendererInterface} from '../../types';
import {VideoRendererReducer} from './video-renderer-reducer';
import {
  ChannelByVideoInterface,
} from '../../channel-by-video/channel-by-video-map';
import {AbstractRendererReducer} from './abstract-renderer-reducer';

export class RichItemRendererReducer implements AbstractRendererReducer {
  private readonly renderer: RichItemRendererInterface['content']['videoRenderer'];

  public constructor(data: RichItemRendererInterface) {
    this.renderer = data.content.videoRenderer;
  }

  public reduce(): ChannelByVideoInterface {
    const r = new VideoRendererReducer(this.renderer);
    return r.reduce();
  }
}

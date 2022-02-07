import {RichItemRendererInterface} from '../types';
import {VideoRenderer} from './video-renderer';
import {
  ChannelByVideoInterface,
} from '../channel-by-video/channel-by-video-map';

export class RichItemRenderer {
  private props: RichItemRendererInterface;

  public constructor(r: RichItemRendererInterface) {
    this.props = r;
  }

  public parse(): ChannelByVideoInterface {
    const renderer = new VideoRenderer(this.props.content.videoRenderer);
    return renderer.parse();
  }
}

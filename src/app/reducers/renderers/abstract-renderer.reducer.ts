import {
  ChannelByVideoInterface,
} from '../../channel-by-video/channel-by-video-map';
import {ItemSectionRendererInterface} from '../../types';

export abstract class AbstractRendererReducer {
  public abstract reduce(data?: ItemSectionRendererInterface): ChannelByVideoInterface
}

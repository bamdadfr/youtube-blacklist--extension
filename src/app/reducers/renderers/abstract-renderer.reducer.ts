import {ChannelByVideoInterface} from '../../maps/channel-by-video.map';
import {ItemSectionRendererInterface} from '../../types';

export abstract class AbstractRendererReducer {
  public abstract reduce(data?: ItemSectionRendererInterface): ChannelByVideoInterface
}

import {
  ChannelByVideoInterface,
} from '../../common/channel-by-video';
import {ItemSectionRendererInterface} from '../../types';

export abstract class AbstractRendererReducer {
  public abstract reduce(data?: ItemSectionRendererInterface): ChannelByVideoInterface
}

import {
  ChannelByVideoInterface,
} from '../common/channel-by-video';

export abstract class AbstractReducerCreator {
  public abstract reduce(): ChannelByVideoInterface
}

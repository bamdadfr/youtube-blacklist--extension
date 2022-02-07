import {
  ChannelByVideoInterface,
} from '../channel-by-video/channel-by-video-map';

export abstract class AbstractReducerCreator {
  public abstract reduce(): ChannelByVideoInterface
}

import {ChannelByVideoInterface} from '../maps/channel-by-video.map';

export abstract class AbstractReducerCreator {
  public abstract reduce(): ChannelByVideoInterface
}

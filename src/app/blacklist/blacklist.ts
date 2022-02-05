import {State, StateKeys, StateType} from '../utils/state';
import {ChannelByVideoMap} from '../channel-by-video/channel-by-video-map';
import {VideoContainer} from '../video/video-container';

type ChannelId = string;
type ChannelName = string;

export interface BlacklistInterface {
  [key: ChannelId]: ChannelName;
}

export class Blacklist {
  public static async get(): Promise<BlacklistInterface> {
    const {blacklist} = await State.get();
    return blacklist;
  }

  public static async addChannel(id: string, name: string): Promise<void> {
    if (typeof id === 'undefined') {
      throw new Error('id is undefined');
    }

    if (typeof name === 'undefined') {
      throw new Error('name is undefined');
    }

    const blacklist = await this.get();
    const payload = Object.assign(blacklist, {[id]: name});
    await State.set(StateKeys.blacklist, payload);
  }

  public static onNew(callback: () => void): void {
    State.onNew((newState: StateType) => {
      if (typeof newState.blacklist.newValue !== 'undefined') {
        callback();
      }
    });
  }

  public static async has(id: string): Promise<boolean> {
    const blacklist = await Blacklist.get();
    const channelByVideo = await ChannelByVideoMap.get();

    return typeof blacklist[channelByVideo[id]] !== 'undefined';
  }

  public static traverse(containers: VideoContainer[]): void {
    for (let i = 0; i < containers.length; i += 1) {
      const container = containers[i];
      const videos = container.videos;

      for (let j = 0; j < videos.length; j += 1) {
        const video = videos[j];

        Blacklist.has(video.id).then((isBlacklisted) => {
          if (isBlacklisted && !video.hidden) {
            video.hide();
          }
        });
      }
    }
  }
}

import {ChannelByVideo} from './channel-by-video';
import {Video} from './video';
import {Utils} from '../utils/utils';

export class Channel {
  public id: string;

  public name: string;

  public constructor(video: Video) {
    const el = video.container.getElementsByTagName('ytd-channel-name')[0];
    ChannelByVideo.find(video.id).then((id) => {
      const name = Utils.getDeepestElement(el).textContent;

      if (!id || !name) {
        throw new Error('Channel not found');
      }

      this.id = id;
      this.name = Utils.getDeepestElement(el).textContent;
    });
  }

  private update() {
    // update videos
  }

  private subscribe() {
    // listen to blacklist
  }
}

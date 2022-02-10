import {ChannelByVideoMap} from '../maps/channel-by-video.map';
import {Video} from './video';
import {Utils} from '../utils/utils';

export class Channel {
  public id: string;

  public name: string;

  public constructor(video: Video) {
    const el = video.container.getElementsByTagName('ytd-channel-name')[0];

    ChannelByVideoMap.find(video.id).then((id) => {
      const name = Utils.getDeepestElement(el).textContent;

      if (!id || !name) {
        throw new Error('Channel not found');
      }

      this.id = id;
      this.name = Utils.getDeepestElement(el).textContent;
    });
  }
}

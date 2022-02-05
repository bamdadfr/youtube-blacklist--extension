import {ChannelByVideoMap} from '../../channel-by-video/channel-by-video-map';
import {Video} from '../video';

export class Channel {
  public id: string;

  public name: string;

  private readonly element: Element;

  public constructor(video: Video) {
    this.element = Channel.getElementFromVideo(video);
    const name = Channel.getName(this.element);

    ChannelByVideoMap.find(video.id).then((id) => {
      Channel.validate(id, name);

      this.id = id;
      this.name = name;
    });
  }

  public static getElementFromVideo(video: Video): Element {
    return video.element.getElementsByTagName('ytd-channel-name')[0];
  }

  private static getDeepestElement(parent: Element) {
    let element = parent;

    while (typeof element.children[0] !== 'undefined') {
      element = element.children[0];
    }

    return element;
  }

  private static getName(element: Element) {
    return Channel.getDeepestElement(element).textContent;
  }

  private static validate(id: string, name: string): void {
    if (typeof id === 'undefined') {
      throw new Error('Channel: id is undefined');
    }

    if (typeof name === 'undefined') {
      throw new Error('Channel: name is undefined');
    }
  }
}

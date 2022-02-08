import compare from 'just-compare';
import {CHANNEL_BY_VIDEO_ID} from '../constants';
import {Utils} from '../utils/utils';
import {PageUtils} from '../utils/page.utils';

type VideoIdType = string;
type ChannelIdType = string;

export interface ChannelByVideoInterface {
  [key: VideoIdType]: ChannelIdType;
}

export class ChannelByVideoMap {
  private static readonly id: string = CHANNEL_BY_VIDEO_ID;

  public static insertMany(data: ChannelByVideoInterface): void {
    const length = Object.keys(data).length;
    Utils.log(`ChannelByVideoMap: insert ${length} entries`);

    this.appendDom(data);
  }

  public static async get(): Promise<ChannelByVideoInterface> {
    return await this.readDom(this.id);
  }

  public static async find(videoId: VideoIdType): Promise<ChannelIdType> {
    const map = await this.get();
    return map[videoId];
  }

  private static async readDom(id: string): Promise<ChannelByVideoInterface> {
    return Utils.promisify((resolve, retry) => {
      const node = document.getElementById(id);

      if (!node) {
        return retry();
      }

      return resolve(JSON.parse(node.innerHTML));
    });
  }

  private static appendDom(data: ChannelByVideoInterface): void {
    const target = document.getElementById(this.id);
    let existingData = undefined;

    if (target) {
      existingData = JSON.parse(target.innerHTML);
    }

    if (compare(data, existingData)) {
      return;
    }

    const payload = Object.assign(existingData || {}, data);
    this.writeDom(payload);
  }

  private static writeDom(payload: string | ChannelByVideoInterface) {
    const body = document.getElementsByTagName('body')[0];
    const node = PageUtils.createUniqueNode(this.id);

    node.innerHTML = typeof payload === 'object'
      ? JSON.stringify(payload)
      : payload;

    body.appendChild(node);
  }
}

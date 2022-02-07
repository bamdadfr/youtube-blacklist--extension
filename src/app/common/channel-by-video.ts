import {CHANNEL_BY_VIDEO_ID} from '../constants';
import {PageProxy} from '../proxies/page.proxy';
import {Utils} from '../utils/utils';

type VideoIdType = string;
type ChannelIdType = string;

export interface ChannelByVideoInterface {
  [key: VideoIdType]: ChannelIdType;
}

export class ChannelByVideo {
  private static readonly id: string = CHANNEL_BY_VIDEO_ID;

  private static proxy: PageProxy = new PageProxy();

  public static insertMany(data: ChannelByVideoInterface): void {
    const length = Object.keys(data).length;
    Utils.log(`ChannelByVideoMap: insert ${length} entries`);

    this.proxy.append({
      id: this.id,
      data,
    });
  }

  public static async get(): Promise<ChannelByVideoInterface> {
    return await this.proxy.fetch(this.id);
  }

  public static async find(videoId: VideoIdType): Promise<ChannelIdType> {
    const map = await this.get();
    return map[videoId];
  }
}

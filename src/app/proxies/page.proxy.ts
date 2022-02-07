import compare from 'just-compare';
import {Utils} from '../utils/utils';
import {PageUtils} from '../utils/page.utils';
import {ChannelByVideoInterface} from '../common/channel-by-video';

interface PostProps {
  id: string;
  data: any;
}

interface WriteProps {
  id: string;
  payload: string | ChannelByVideoInterface;
}

/**
 * The handlers service allows to fetch DOM elements from the original handlers.
 * It can also write serialized data to the handlers to allow for cross-context communication between the extension and the handlers.
 */
export class PageProxy {
  private static write({id, payload}: WriteProps) {
    const body = document.getElementsByTagName('body')[0];
    const node = PageUtils.createUniqueNode(id);

    node.innerHTML = typeof payload === 'object'
      ? JSON.stringify(payload)
      : payload;

    body.appendChild(node);
  }

  public append({
    data,
    id,
  }: PostProps): void {
    const target = document.getElementById(id);
    let existingData = undefined;

    if (target) {
      existingData = JSON.parse(target.innerHTML);
    }

    if (compare(data, existingData)) {
      return;
    }

    const payload = Object.assign(existingData || {}, data);
    PageProxy.write({id, payload});
  }

  public async fetch(id: string): Promise<ChannelByVideoInterface> {
    return Utils.promisify((resolve, retry) => {
      const node = document.getElementById(id);

      if (!node) {
        return retry();
      }

      return resolve(JSON.parse(node.innerHTML));
    });
  }
}

import {
  ChannelByVideoInterface,
} from '../channel-by-video/channel-by-video-map';
import {Utils} from '../utils/utils';
import {AjaxParserBrowseStrategy} from './ajax-parser-browse-strategy';
import {AjaxParserSearchStrategy} from './ajax-parser-search-strategy';
import {AjaxParserNextStrategy} from './ajax-parser-next-strategy';
import {YoutubeResponseData} from '../types';

export interface AjaxParserStrategy {
  parse(url: string, data: YoutubeResponseData): ChannelByVideoInterface;
}

type AjaxParserCallbackType = (data: ChannelByVideoInterface) => void;

/**
 * Ajax Parser Context
 */
export class AjaxParser {
  private strategy: AjaxParserStrategy;

  private readonly endpoints = {
    browse: '/v1/browse',
    search: '/v1/search',
    next: '/v1/next',
  };

  private url: string;

  private data: YoutubeResponseData;

  public constructor(callback: AjaxParserCallbackType) {
    Utils.interceptFetch((url: string, data: YoutubeResponseData) => {
      if (url && data) {
        const isValid = this.validateEndpoint(url, data);

        Utils.log(`AjaxParser: ${Utils.filterYoutubeEndpoint(url)}`);
        if (isValid) {
          return callback(this.parse());
        }
      }
    });
  }

  private setStrategy(strategy: AjaxParserStrategy): void {
    this.strategy = strategy;
  }

  private validateEndpoint(url: string, data: YoutubeResponseData): boolean {
    if (url.includes(this.endpoints.browse)) {
      this.setStrategy(new AjaxParserBrowseStrategy(data));
    } else if (url.includes(this.endpoints.search)) {
      this.setStrategy(new AjaxParserSearchStrategy(data));
    } else if (url.includes(this.endpoints.next)) {
      this.setStrategy(new AjaxParserNextStrategy(data));
    } else {
      delete this.strategy;
      Utils.warn('AjaxParser: endpoint not implemented');
      return false;
    }

    this.url = url;
    this.data = data;

    return true;
  }

  private parse(): ChannelByVideoInterface {
    if (!this.strategy) {
      throw new Error('AjaxParser: Strategy not set');
    }

    return this.strategy.parse(this.url, this.data);
  }
}

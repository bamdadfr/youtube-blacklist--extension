import {Utils} from '../utils/utils';
import {YoutubeResponseData} from '../types';
import {DynamicReducerCreator} from '../reducers/dynamic-reducer.creator';

export type DynamicInterceptorCallbackType = (r: DynamicReducerCreator) => void;

export class DynamicInterceptor {
  private readonly endpoints = {
    browse: '/v1/browse',
    search: '/v1/search',
    next: '/v1/next',
  };

  private readonly callback: DynamicInterceptorCallbackType;

  public constructor(callback: DynamicInterceptorCallbackType) {
    this.callback = callback;
    this.load();
  }

  private load() {
    Utils.interceptFetch((url: string, data: YoutubeResponseData) => {
      if (url && data) {
        const endpoint = Utils.filterYoutubeEndpoint(url);
        Utils.log(`DynamicInterceptor: ${endpoint}`);

        const isValid = this.validateEndpoint(endpoint);

        if (isValid) {
          return this.callback(new DynamicReducerCreator(data));
        }
      }
    });
  }

  private validateEndpoint(endpoint: string): boolean {
    if (
      endpoint === this.endpoints.browse
      || endpoint === this.endpoints.search
      || endpoint === this.endpoints.next
    ) {
      return true;
    }
  }
}

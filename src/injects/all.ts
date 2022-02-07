import {ChannelByVideoMap} from '../app/channel-by-video/channel-by-video-map';
import {StaticReducer} from '../app/reducers/static-reducer';
import {DynamicInterceptor} from '../app/interceptors/dynamic-interceptor';

/**
 * Injects all pages
 */
export async function injectAll(): Promise<void> {
  try {
    // static
    const staticReducer = new StaticReducer();
    const staticMap = staticReducer.reduce();
    ChannelByVideoMap.insertMany(staticMap);

    // dynamic
    new DynamicInterceptor((dynamicReducer) => {
      const ajaxMap = dynamicReducer.reduce();
      ChannelByVideoMap.insertMany(ajaxMap);
    });
  } catch (e) {
    throw new Error(e);
  }
}

injectAll().then();

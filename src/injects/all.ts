import {ChannelByVideo} from '../app/common/channel-by-video';
import {StaticReducerCreator} from '../app/reducers/static-reducer.creator';
import {DynamicInterceptor} from '../app/interceptors/dynamic.interceptor';

/**
 * Injects all pages
 */
export async function injectAll(): Promise<void> {
  try {
    // static
    const staticReducer = new StaticReducerCreator();
    const staticMap = staticReducer.reduce();
    ChannelByVideo.insertMany(staticMap);

    // dynamic
    new DynamicInterceptor((dynamicReducer) => {
      const ajaxMap = dynamicReducer.reduce();
      ChannelByVideo.insertMany(ajaxMap);
    });
  } catch (e) {
    throw new Error(e);
  }
}

injectAll().then();

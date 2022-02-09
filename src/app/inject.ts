import {ChannelByVideoMap} from './maps/channel-by-video.map';
import {DynamicInterceptor} from './interceptors/dynamic.interceptor';
import {Parser, ParserCollection} from './common/parser';
import {Reducer} from './common/reducer';

/**
 * Injects all pages
 */
export async function inject(): Promise<void> {
  try {
    const keysToMatch = ['videoRenderer', 'compactVideoRenderer'];

    // static
    const staticParser = new Parser(window.ytInitialData.contents as ParserCollection, keysToMatch);
    const staticResults = staticParser.parse();
    const staticReducer = new Reducer(staticResults);
    const staticMap = staticReducer.reduce();

    ChannelByVideoMap.insertMany(staticMap);

    // dynamic
    new DynamicInterceptor((data) => {
      const dynamicParser = new Parser(data as ParserCollection, keysToMatch);
      const dynamicResults = dynamicParser.parse();
      const dynamicReducer = new Reducer(dynamicResults);
      const dynamicMap = dynamicReducer.reduce();

      ChannelByVideoMap.insertMany(dynamicMap);
    });
  } catch (e) {
    throw new Error(e);
  }
}

inject().then();

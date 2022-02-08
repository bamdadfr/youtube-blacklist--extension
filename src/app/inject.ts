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
    const parser = new Parser(window.ytInitialData.contents as ParserCollection, keysToMatch);
    const results = parser.parse();
    const reducer = new Reducer(results);
    const map = reducer.reduce();

    ChannelByVideoMap.insertMany(map);

    // dynamic
    new DynamicInterceptor((data) => {
      const parser = new Parser(data as ParserCollection, keysToMatch);
      const results = parser.parse();
      const reducer = new Reducer(results);
      const map = reducer.reduce();

      ChannelByVideoMap.insertMany(map);
    });
  } catch (e) {
    throw new Error(e);
  }
}

inject().then();

import {ChannelByVideoMap} from '../app/maps/channel-by-video.map';
import {DynamicInterceptor} from '../app/interceptors/dynamic.interceptor';
import {Parser, ParserCollection} from '../app/common/parser';
import {Reducer} from '../app/common/reducer';

/**
 * Injects all pages
 */
export async function injectAll(): Promise<void> {
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

injectAll().then();

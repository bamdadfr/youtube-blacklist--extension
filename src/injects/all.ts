import {StaticParser} from '../app/parser/static-parser';
import {ChannelByVideoMap} from '../app/channel-by-video/channel-by-video-map';
import {AjaxParser} from '../app/parser/ajax-parser';

/**
 * Injects all pages
 */
export async function injectAll(): Promise<void> {
  try {
    // static
    const staticParser = new StaticParser();
    const staticMap = staticParser.parse();
    ChannelByVideoMap.insertMany(staticMap);

    // ajax
    new AjaxParser((ajaxMap) => {
      ChannelByVideoMap.insertMany(ajaxMap);
    });
  } catch (e) {
    throw new Error(e);
  }
}

injectAll().then();

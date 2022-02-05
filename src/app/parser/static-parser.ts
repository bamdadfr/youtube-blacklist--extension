import {PageUtils} from '../utils/page-utils';
import {StaticParserHomeStrategy} from './static-parser-home-strategy';
import {StaticParserSearchStrategy} from './static-parser-search-strategy';
import {StaticParserWatchStrategy} from './static-parser-watch-strategy';
import {
  ChannelByVideoInterface,
} from '../channel-by-video/channel-by-video-map';

export interface StaticParserStrategy {
  parse(): ChannelByVideoInterface;
}

/**
 * Static Parser Context
 *
 * This is supposed to run only once at page load.
 * It will parse initial / static data already present in the DOM.
 */
export class StaticParser {
  public isReady = false;

  private strategy: StaticParserStrategy;

  private retryInterval = 1000;

  public constructor() {
    this.prepare();
  }

  public setStrategy(strategy: StaticParserStrategy): void {
    this.strategy = strategy;
  }

  public parse(): ChannelByVideoInterface {
    if (!this.isReady) {
      throw new Error('StaticParser: not ready');
    }

    if (!this.strategy) {
      throw new Error('StaticParser: Strategy not set');
    }

    return this.strategy.parse();
  }

  private prepare() {
    if (!PageUtils.currentPage) {
      setTimeout(() => this.prepare(), this.retryInterval);
      return;
    }

    if (PageUtils.isHome) {
      this.setStrategy(new StaticParserHomeStrategy());
    } else if (PageUtils.isSearch) {
      this.setStrategy(new StaticParserSearchStrategy());
    } else if (PageUtils.isWatch) {
      this.setStrategy(new StaticParserWatchStrategy());
    }

    this.isReady = true;
  }
}

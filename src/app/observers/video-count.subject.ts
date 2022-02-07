import {AbstractSubject} from './abstract.subject';
import {PageHandler as h} from '../handlers/page.handler';
import {Pages as p} from '../utils/page.utils';

/**
 * Counting videos present in the DOM.
 * If changes are detected, it will notify the observers.
 */
export class VideoCountSubject extends AbstractSubject {
  private count = 0;

  private query = `${h.queries.videos[p.home]}, ${h.queries.videos[p.search]}, ${h.queries.videos[p.watch]}`;

  public constructor() {
    super();

    this.count = this.getVideoCount();

    const o = new MutationObserver(() => {
      const newCount = this.getVideoCount();

      if (newCount === this.count) {
        return;
      }

      this.count = newCount;
      this.notify();
    });

    o.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  public getVideoCount(): number {
    const videos = document.querySelectorAll(this.query);
    return videos.length;
  }
}

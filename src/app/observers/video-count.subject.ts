import {AbstractSubject} from './abstract.subject';
import {PageHandler} from '../handlers/page.handler';

/**
 * Counting videos present in the DOM.
 * If changes are detected, it will notify the observers.
 */
export class VideoCountSubject extends AbstractSubject {
  private count = 0;

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
    const videos = document.querySelectorAll(PageHandler.query);
    return videos.length;
  }
}

import {AbstractSubject} from './abstract.subject';

export class LocationSubject extends AbstractSubject {
  private savedHref: string;

  private observer: MutationObserver;

  public constructor() {
    super();
    this.savedHref = window.location.href;

    this.observer = new MutationObserver(() => {
      if (this.savedHref === window.location.href) {
        return;
      }

      this.savedHref = window.location.href;
      this.notify();
    });

    this.observer.observe(document.body, {
      childList: true,
    });
  }
}

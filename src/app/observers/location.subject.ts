import {AbstractSubject} from './abstract.subject';

export class LocationSubject extends AbstractSubject {
  private savedHref: string;

  public constructor() {
    super();

    this.savedHref = window.location.href;

    const o = new MutationObserver(() => {
      if (this.savedHref === window.location.href) {
        return;
      }

      this.savedHref = window.location.href;
      this.notify();
    });

    o.observe(document.body, {
      childList: true,
    });
  }
}

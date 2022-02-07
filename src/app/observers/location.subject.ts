import {AbstractSubject} from './abstract.subject';
import {AbstractObserver} from './abstract.observer';

export class LocationSubject implements AbstractSubject {
  private savedHref: string;

  private observer: MutationObserver;

  private observers: AbstractObserver[] = [];

  public constructor() {
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

  public attach(observer: AbstractObserver): void {
    if (this.observers.includes(observer)) {
      return;
    }

    this.observers.push(observer);
  }

  public detach(observer: AbstractObserver): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return;
    }

    this.observers.splice(observerIndex, 1);
  }

  public notify(): void {
    this.observers.forEach((observer) => {
      observer.update(this);
    });
  }
}

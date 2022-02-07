import {AbstractObserver} from './abstract.observer';

export interface AbstractSubject {
  attach(observer: AbstractObserver): void;

  detach(observer: AbstractObserver): void;

  notify(): void;
}

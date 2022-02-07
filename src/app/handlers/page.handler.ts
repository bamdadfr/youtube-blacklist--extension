import {PageUtils} from '../utils/page.utils';
import {Blacklist} from '../common/blacklist';
import {Video} from '../common/video';
import {LocationSubject} from '../observers/location.subject';
import {AbstractObserver} from '../observers/abstract.observer';
import {VideoCountSubject} from '../observers/video-count.subject';

export class PageHandler implements AbstractObserver {
  public static query = 'ytd-rich-item-renderer, ytd-video-renderer, ytd-compact-video-renderer';

  private videos: Video[] = [];

  public constructor() {
    PageUtils.injectScript('injects/all.js', 'body');
    this.update();
  }

  public watch(): void {
    // blacklist changes
    Blacklist.onNew(() => {
      Blacklist.traverse(this.videos);
    });

    const location = new LocationSubject();
    location.attach(this);

    const videoCount = new VideoCountSubject();
    videoCount.attach(this);
  }

  public update(): void {
    if (!PageUtils.currentPage) {
      return;
    }

    this.addVideos();
    Blacklist.traverse(this.videos);
  }

  private getVideoContainers(): Element[] {
    const array: Element[] = [];
    const containers = document.querySelectorAll(PageHandler.query);

    Array.from(containers).forEach((container) => {
      array.push(container);
    });

    return array;
  }

  private addVideos() {
    const containers = this.getVideoContainers();
    const payload: Video[] = [];

    if (this.videos.length === 0) {
      // init
      containers.forEach((container) => {
        payload.push(new Video(container as HTMLElement));
      });
    } else {
      // add only new videos
      const newContainers = containers.filter((container) => !this.videos.some((video) => video.container.isSameNode(container)));

      newContainers.forEach((newContainer) => {
        payload.push(new Video(newContainer as HTMLElement));
      });
    }

    this.videos.push(...payload);
  }
}

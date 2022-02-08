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

  private static getVideoContainers(): Element[] {
    const containers = document.querySelectorAll(PageHandler.query);
    return Array.from(containers);
  }

  public watch(): void {
    // blacklist changes
    Blacklist.onNew(() => {
      this.update();
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
    Blacklist.traverse(this.videos).then();
  }

  private addVideos() {
    const containers = PageHandler.getVideoContainers();
    let newVideos: Video[] = [];

    if (this.videos.length === 0) {
      // init
      for (let i = 0; i < containers.length; ++i) {
        newVideos = [
          ...newVideos,
          new Video(containers[i] as HTMLElement),
        ];
      }
    } else {
      // add only new videos
      const newContainers = containers.filter((container) => !this.videos.some((video) => video.container.isSameNode(container)));

      for (let i = 0; i < newContainers.length; ++i) {
        newVideos = [
          ...newVideos,
          new Video(newContainers[i] as HTMLElement),
        ];
      }
    }

    this.videos = [
      ...this.videos,
      ...newVideos,
    ];
  }
}

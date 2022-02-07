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
    this.addVideos();
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
  }

  private getVideos(): Video[] {
    const videos = document.querySelectorAll(PageHandler.query);

    if (videos.length === 0) {
      return this.videos;
    }

    const array: Video[] = [];

    Array.from(videos).forEach((video) => {
      array.push(new Video(video as HTMLElement));
    });

    return array;
  }

  // Add new videos
  private addVideos() {
    const videos = this.getVideos();

    if (this.videos.length === 0) {
      // init
      this.videos = videos;
    } else {
      // add only new videos
      const newVideos = videos.filter((video) => !this.videos.some((oldVideo) => oldVideo.id === video.id));
      this.videos.push(...newVideos);
    }
    Blacklist.traverse(this.videos);
  }
}

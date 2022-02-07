import {Pages, PageUtils} from '../utils/page.utils';
import {Utils} from '../utils/utils';
import {Blacklist} from '../common/blacklist';
import {Video} from '../common/video';
import {LocationSubject} from '../observers/location.subject';
import {AbstractObserver} from '../observers/abstract.observer';
import {VideoCountSubject} from '../observers/video-count.subject';

export class PageHandler implements AbstractObserver {
  public static queries = {
    videos: {
      [Pages.home]: 'ytd-rich-item-renderer',
      [Pages.search]: 'ytd-video-renderer',
      [Pages.watch]: 'ytd-compact-video-renderer',
    },
  };

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

    Utils.log(`Page: ${PageUtils.currentPage}`);
    this.addVideos();
  }

  private getVideos(): Promise<Video[]> {
    return Utils.promisify((resolve, retry) => {
      const videos = document.querySelectorAll(PageHandler.queries.videos[PageUtils.currentPage]);

      if (videos.length === 0) {
        return retry();
      }
      const array: Video[] = [];

      Array.from(videos).forEach((video) => {
        array.push(new Video(video as HTMLElement));
      });

      return resolve(array);
    });
  }

  // Add new videos
  private addVideos() {
    this.getVideos().then((videos) => {
      if (this.videos.length === 0) {
        // init
        this.videos = videos;
      } else {
        // add only new videos
        const newVideos = videos.filter((video) => !this.videos.some((oldVideo) => oldVideo.id === video.id));
        this.videos.push(...newVideos);
      }
      Blacklist.traverse(this.videos);
    });
  }
}

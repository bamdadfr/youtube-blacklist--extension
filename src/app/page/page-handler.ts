import {PageUtils} from '../utils/page-utils';
import {Utils} from '../utils/utils';
import {VideoContainer} from '../video/video-container';
import {Location} from '../utils/location';
import {Blacklist} from '../blacklist/blacklist';

export class PageHandler {
  private containers: VideoContainer[] = [];

  private readonly containersQuery = '#contents, #primary';

  public constructor() {
    this.start();
  }

  public static load(): void {
    PageUtils.injectScript('injects/all.js', 'body');
  }

  public watch(): void {
    Blacklist.onNew(() => this.applyBlacklist());
    Location.onNew(() => {
      if (PageUtils.currentPage) {
        Utils.log(`Page: ${PageUtils.currentPage}`);
        this.start();
      }
    });
  }

  private start() {
    this.addVideoContainers();
    this.applyBlacklist();
  }

  private applyBlacklist() {
    const containers = Array.from(this.containers);

    for (let i = 0; i < containers.length; i += 1) {
      const container = containers[i];
      const videos = container.videos;

      for (let j = 0; j < videos.length; j += 1) {
        const video = videos[j];

        Blacklist.has(video.id).then((isBlacklisted) => {
          if (isBlacklisted && !video.hidden) {
            video.hide();
          }
        });
      }
    }
  }

  private addVideoContainers() {
    this.fetchVideoContainers().then((c) => {
      const containerElements = Array.from(c);

      for (let i = 0; i < containerElements.length; i += 1) {
        const containerElement = containerElements[i];

        if (this.containers.length === 0) {
          this.containers.push(new VideoContainer(containerElement));
        } else {
          const knownContainerElements = this.containers.map((child) => child.element);

          if (
            !knownContainerElements.includes(containerElement)
            && !knownContainerElements
              .map((kC) => kC.contains(containerElement))
              .reduce((_, isChild) => isChild === true)
          ) {
            this.containers.push(new VideoContainer(containerElement));
          }
        }
      }
    });
  }

  private fetchVideoContainers(): Promise<HTMLCollectionOf<HTMLElement>> {
    return Utils.promisify((resolve, retry) => {
      const parents = document.querySelectorAll(this.containersQuery);

      if (parents.length === 0) {
        retry();
      } else {
        resolve(parents);
      }
    });
  }
}

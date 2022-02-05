import {PageUtils} from '../utils/page-utils';
import {Utils} from '../utils/utils';
import {VideoContainer} from '../video/video-container';
import {Location} from '../utils/location';
import {Blacklist} from '../blacklist/blacklist';

export class PageHandler {
  private containers: VideoContainer[] = [];

  private readonly containersQuery = '#contents, #primary';

  public constructor() {
    PageUtils.injectScript('injects/all.js', 'body');
    this.addContainers();
  }

  public watch(): void {
    // blacklist changes
    Blacklist.onNew(() => {
      Blacklist.traverse(this.containers);
    });

    // location changes
    Location.onNew(() => {
      if (PageUtils.currentPage) {
        Utils.log(`Page: ${PageUtils.currentPage}`);
        this.addContainers();
      }
    });
  }

  private addContainers() {
    this.getNewContainers().then((newContainers) => {
      this.containers.push(...newContainers);
      Blacklist.traverse(this.containers);
    });
  }

  private getNewContainers(): Promise<VideoContainer[]> {
    return this.fetchAllContainerElements().then((allContainerElements) =>
      this.filterNewContainers(Array.from(allContainerElements)),
    );
  }

  private fetchAllContainerElements(): Promise<HTMLCollectionOf<HTMLElement>> {
    return Utils.promisify((resolve, retry) => {
      const elements = document.querySelectorAll(this.containersQuery);

      if (elements.length === 0) {
        return retry();
      } else {
        resolve(elements);
      }
    });
  }

  private filterNewContainers(containerElements: Element[]) {
    const newContainers = [] as VideoContainer[];

    for (let i = 0; i < containerElements.length; i += 1) {
      const containerElement = containerElements[i];

      if (this.containers.length === 0) {
        newContainers.push(new VideoContainer(containerElement));
      } else {
        const knownContainerElements = this.containers.map((child) => child.element);

        if (
          !knownContainerElements.includes(containerElement)
          && !knownContainerElements
            .map((kC) => kC.contains(containerElement))
            .reduce((_, isChild) => isChild === true)
        ) {
          newContainers.push(new VideoContainer(containerElement));
        }
      }
    }

    return newContainers;
  }
}

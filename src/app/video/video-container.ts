import {PageView} from '../page/page-view';
import {Video} from './video';
import {PageUtils} from '../utils/page-utils';

export class VideoContainer {
  public readonly element: HTMLElement;

  public videos: Video[] = [];

  private observer: MutationObserver;

  public constructor(el: HTMLElement) {
    this.element = el;

    this.load();
    this.observe();
  }

  private load() {
    const videoElements = Array.from(PageView.getVideoElements(this.element));
    for (let i = 0; i < videoElements.length; i++) {
      this.videos.push(new Video(videoElements[i]));
    }
  }

  private observe() {
    this.observer = new MutationObserver((mutations) => {
      for (let i = 0; i < mutations.length; i += 1) {
        const mutation = mutations[i];
        const addedNodes = mutation.addedNodes;

        for (let j = 0; j < addedNodes.length; j += 1) {
          const addedNode = addedNodes[j];
          const currentPageTagName = PageView.tagNamesByPage[PageUtils.currentPage];

          if (addedNode.nodeName === currentPageTagName.toUpperCase()) {
            this.videos = [
              ...this.videos,
              new Video(addedNode as HTMLElement),
            ];
          }
        }
      }
    });

    this.observer.observe(this.element, {
      childList: true,
      subtree: true,
    });
  }
}

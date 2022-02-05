import {Pages, PageUtils} from '../utils/page-utils';

export type VideoElementsType = HTMLCollectionOf<HTMLElement>

export class PageView {
  public static tagNamesByPage = {
    [Pages.home]: 'ytd-rich-item-renderer',
    [Pages.search]: 'ytd-video-renderer',
    [Pages.watch]: 'ytd-compact-video-renderer',
  };

  public static getVideoElements(node: HTMLElement): VideoElementsType {
    return node.getElementsByTagName(this.tagNamesByPage[PageUtils.currentPage]) as HTMLCollectionOf<HTMLElement>;
  }
}

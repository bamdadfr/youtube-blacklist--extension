import {Browser} from './browser';

export enum Pages {
  'home' = 'home',
  'search' = 'search',
  'watch' = 'watch',
}

export class PageUtils {
  public static get isHome(): boolean {
    return /youtube(\.com)?\/?$/.exec(window.location.href) !== null;
  }

  public static get isSearch(): boolean {
    return /youtube(\.com)?\/results/.exec(window.location.href) !== null;
  }

  public static get isWatch(): boolean {
    return /youtube(\.com)?\/watch\?v=/.exec(window.location.href) !== null;
  }

  public static get currentPage(): Pages {
    if (this.isHome) {
      return Pages.home;
    } else if (this.isSearch) {
      return Pages.search;
    } else if (this.isWatch) {
      return Pages.watch;
    }
  }

  public static createUniqueNode(id: string): HTMLElement {
    const target = document.getElementById(id);

    if (target) {
      return target;
    }

    const node = document.createElement('div');
    node.setAttribute('id', id);
    node.setAttribute('style', 'display: none;');

    return node;
  }

  public static injectScript(filename: string, targetNode: string): HTMLScriptElement {
    const doesExist = document.querySelector(`script[src*='${filename}']`) !== null;

    if (doesExist) {
      return;
    }

    const browser = Browser.get();
    const path = browser.runtime.getURL(filename);
    const target = document.getElementsByTagName(targetNode)[0];

    const script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', path);

    target.appendChild(script);

    return script;
  }
}

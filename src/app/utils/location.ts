type OnNewCallbackType = () => void

export class Location {
  public static onNew(callback: OnNewCallbackType): void {
    let savedHref = window.location.href;

    const observer = new MutationObserver(() => {
      if (savedHref !== document.location.href) {
        savedHref = document.location.href;
        callback();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }
}

import {getBrowser} from '../utils/get-browser';
import {setState, SHOULD_RELOAD} from '../utils/set-state';

(async () => {
  const browser = await getBrowser();

  browser.storage.onChanged.addListener(async (changes) => {
    if (changes.shouldReload?.newValue === true) {
      await setState(SHOULD_RELOAD, false);
      browser.tabs.create({url: browser.runtime.getURL('pages/popup.html')});
    }
  });
  browser.browserAction.onClicked.addListener(() => {
    browser.tabs.create({url: browser.runtime.getURL('pages/popup.html')});
  });
})();

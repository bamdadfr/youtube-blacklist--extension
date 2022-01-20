import {getState} from '../utils/get-state';
import {BLACKLIST, setState, SHOULD_RELOAD} from '../utils/set-state';
import {enableSync} from '../utils/enable-sync';
import {disableSync} from '../utils/disable-sync';
import {queryPopupGistSection} from '../utils/query-popup-gist-section';
import {renderPopupGistSection} from '../utils/render-popup-gist-section';
import {isSyncEnabled} from '../utils/is-sync-enabled';

window.addEventListener('load', async () => {
  // gist section
  const {gistSubmit, gistTokenInput, gistIdInput} = queryPopupGistSection();
  await renderPopupGistSection();

  gistSubmit.addEventListener('click', async () => {
    if (await isSyncEnabled()) {
      await disableSync();
    } else {
      await enableSync(gistTokenInput.value, gistIdInput.value);
    }
    await renderPopupGistSection();
  });

  // blacklist section
  const blacklistSubmit = document.querySelector('#blacklist-submit');
  const blacklistContent = document.querySelector('#blacklist-content');
  const state = await getState();
  blacklistContent.value = JSON.stringify(state.blacklist || {}, undefined, 2);
  blacklistSubmit.addEventListener('click', async () => {
    let newBlacklist = undefined;
    try {
      newBlacklist = JSON.parse(blacklistContent.value);
      await setState(BLACKLIST, newBlacklist);
      await setState(SHOULD_RELOAD, true);
      window.close();
    } catch {
      // eslint-disable-next-line no-alert
      alert('error parsing blacklist');
    }
  });
});

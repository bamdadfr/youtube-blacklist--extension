import {getState} from '../utils/get-state';
import {
  BLACKLIST,
  GIST_AUTH,
  GIST_URL,
  setState,
  SHOULD_RELOAD,
} from '../utils/set-state';

window.addEventListener('load', async () => {
  // gist
  const gistSubmit = document.querySelector('#gist-submit');
  const gistAuthContent = document.querySelector('#gist-auth');
  const gistUrlContent = document.querySelector('#gist-url');
  const {gistAuth, gistUrl} = await getState();

  if (gistAuth) {
    gistAuthContent.value = gistAuth;
  }

  if (gistUrl) {
    gistUrlContent.value = gistUrl;
  }

  gistSubmit.addEventListener('click', async () => {
    await setState(GIST_AUTH, gistAuthContent.value);
    await setState(GIST_URL, gistUrlContent.value);
    // await setState(SHOULD_RELOAD, true);
    window.close();
  });

  // blacklist
  const blacklistSubmit = document.querySelector('#blacklist-submit');
  const blacklistContent = document.querySelector('#blacklist-content');
  const {blacklist} = await getState();

  blacklistContent.value = JSON.stringify(blacklist, undefined, 2);
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

import {getState} from '../utils/get-state';
import {setState} from '../utils/set-state';

window.addEventListener('load', async () => {
  const apply = document.querySelector('#blacklist-submit');
  const textarea = document.querySelector('#blacklist-content');
  const {blacklist} = await getState();

  textarea.value = JSON.stringify(blacklist, undefined, 2);

  apply.addEventListener('click', async () => {
    let newBlacklist = undefined;
    try {
      newBlacklist = JSON.parse(textarea.value);
      await setState('blacklist', newBlacklist);
      await setState('shouldReload', true);
      window.close();
    } catch {
      // eslint-disable-next-line no-alert
      alert('error parsing blacklist');
    }
  });
});

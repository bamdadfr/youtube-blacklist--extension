import {State, StateKeys} from './utils/state';

/**
 * The popup script entry point.
 */
export async function popup(): Promise<void> {
  const apply = document.querySelector('button');
  const textarea = document.querySelector('textarea');
  const {blacklist} = await State.get();

  textarea.value = JSON.stringify(blacklist, undefined, 2);

  apply.addEventListener('click', async () => {
    let newBlacklist = undefined;

    try {
      newBlacklist = JSON.parse(textarea.value);
      await State.set(StateKeys.blacklist, newBlacklist);
      await State.set(StateKeys.shouldReload, true);
      window.close();
    } catch {
      // eslint-disable-next-line no-alert
      alert('error parsing blacklist');
    }
  });
}

window.addEventListener('load', popup);

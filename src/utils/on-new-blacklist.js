import {onNewState} from './on-new-state';

/**
 * @param {Function} fn callback
 */
export function onNewBlacklist(fn) {
  const listener = (newState) => {
    const {blacklist} = newState;

    if (!blacklist) {
      return;
    }

    const {newValue, oldValue} = blacklist;

    if (!blacklist.newValue) {
      return;
    }

    fn(newValue, oldValue);
  };

  onNewState(listener);
}

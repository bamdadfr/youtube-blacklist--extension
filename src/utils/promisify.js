import {RETRY} from './constants';

/**
 * @param {Function} fn callback
 */
export async function promisify(fn) {
  return new Promise((resolve) => {
    const retry = () => setTimeout(() => fn({resolve, retry}), RETRY);
    return fn({resolve, retry});
  });
}

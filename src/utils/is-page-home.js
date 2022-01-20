/**
 * @param {string} url href string
 * @returns {boolean} ?
 */
export function isPageHome(url) {
  return /youtube(\.com)?\/?$/.exec(url) !== null;
}

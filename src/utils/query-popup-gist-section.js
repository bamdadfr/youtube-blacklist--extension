/**
 *
 */
export function queryPopupGistSection() {
  const gistTokenInput = document.querySelector('#gist-token');
  const gistIdInput = document.querySelector('#gist-id');
  const gistSubmit = document.querySelector('#gist-submit');

  return {
    gistTokenInput,
    gistIdInput,
    gistSubmit,
  };
}

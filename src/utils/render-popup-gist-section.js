import {getState} from './get-state';
import {queryPopupGistSection} from './query-popup-gist-section';
import {isSyncEnabled} from './is-sync-enabled';

/**
 *
 */
export async function renderPopupGistSection() {
  const {
    gistTokenInput,
    gistIdInput,
    gistSubmit,
  } = queryPopupGistSection();

  const state = await getState();

  if (await isSyncEnabled()) {
    gistTokenInput.value = state.gistToken;
    gistTokenInput.type = 'password';
    gistTokenInput.disabled = true;

    gistIdInput.value = state.gistId;
    gistIdInput.disabled = true;

    gistSubmit.textContent = 'Uninstall sync';
  } else {
    gistTokenInput.value = '';
    gistTokenInput.type = 'text';
    gistTokenInput.disabled = false;

    gistIdInput.value = '';
    gistIdInput.disabled = false;

    gistSubmit.textContent = 'Install sync';
  }
}

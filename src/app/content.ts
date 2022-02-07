import {PageHandler} from './handlers/page.handler';
import {State} from './utils/state';

/**
 * The content script entry point.
 */
export async function content(): Promise<void> {
  try {
    await State.initialize();
    const pageHandler = new PageHandler();
    pageHandler.watch();
  } catch (e) {
    throw new Error(e);
  }
}

window.addEventListener('load', content);

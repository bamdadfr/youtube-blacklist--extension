import {detectPage} from './detect-page';
import {CURRENT_PAGE, setState} from './set-state';

/**
 *
 */
export async function setCurrentPage() {
  const [currentPage] = detectPage();
  await setState(CURRENT_PAGE, currentPage);
}

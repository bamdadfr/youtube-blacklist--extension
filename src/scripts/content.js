import {onNewHref} from '../utils/on-new-href';
import {setPageInjects} from '../utils/set-page-injects';
import {setPageActions} from '../utils/set-page-actions';
import {initializeState} from '../utils/initialize-state';
import {setCurrentPage} from '../utils/set-current-page';
import {getState} from '../utils/get-state';
// import { setState } from '../utils/set-state'

window.addEventListener('load', async () => {
  await initializeState();
  setPageInjects();
  await setPageActions();
  onNewHref(setCurrentPage);
  console.log(await getState());
});

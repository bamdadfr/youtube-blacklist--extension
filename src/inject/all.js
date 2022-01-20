import {interceptFetch} from '../utils/intercept-fetch';
import {parseStaticData} from '../utils/parse-static-data';

(() => {
  interceptFetch();
  parseStaticData();
})();

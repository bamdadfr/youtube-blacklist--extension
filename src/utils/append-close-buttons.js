import {getVideos} from './get-videos';
import {CLOSE_BUTTON_ID} from './constants';
import {createCloseButton} from './create-close-button';

/**
 */
export async function appendCloseButtons() {
  const videos = await getVideos();

  Array.from(videos).forEach((video) => {
    const buttonExists = video.querySelector(`#${CLOSE_BUTTON_ID}`) !== null;
    if (buttonExists) {
      return;
    }

    createCloseButton({'parentNode': video});
  });
}

import {Video} from '../common/video';
import {CLOSE_BUTTON_ID} from '../constants';

type ListenerType = (e: MouseEvent) => void

export class ButtonComponent {
  private readonly video: Video;

  private readonly button: HTMLSpanElement;

  public constructor(video: Video, listener: ListenerType) {
    this.video = video;
    this.button = ButtonComponent.createButton();
    this.button.onclick = listener;
    this.append();
  }

  private static createButton() {
    const button = document.createElement('span');

    button.id = CLOSE_BUTTON_ID;

    button.innerHTML = `
        <button>
            <svg viewBox="0 0 10 10" height="10" width="10">
                <polygon points="10 1.4 8.6 0 5 3.6 1.4 0 0 1.4 3.6 5 0 8.6 1.4 10 5 6.4 8.6 10 10 8.6 6.4 5"/>
            </svg>
        </button>
    `;

    return button;
  }

  private append(): void {
    const thumbnail = this.video.container.querySelector('#thumbnail');

    if (thumbnail) {
      thumbnail.prepend(this.button);
    }
  }
}

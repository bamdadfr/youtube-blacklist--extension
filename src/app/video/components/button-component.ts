import {CLOSE_BUTTON_ID} from '../../constants';

type ListenerType = (e: MouseEvent) => void

export class ButtonComponent {
  private readonly parent: Element;

  private button: HTMLSpanElement;

  public constructor(parent: Element, listener: ListenerType) {
    this.parent = parent;
    this.createButton();
    this.onClick(listener);
    this.append();
  }

  private append(): void {
    const thumbnail = this.parent.querySelector('#thumbnail');

    if (thumbnail) {
      thumbnail.prepend(this.button);
    }
  }

  private createButton() {
    this.button = document.createElement('span');

    this.button.id = CLOSE_BUTTON_ID;

    this.button.innerHTML = `
        <button>
            <svg viewBox="0 0 10 10" height="10" width="10">
                <polygon points="10 1.4 8.6 0 5 3.6 1.4 0 0 1.4 3.6 5 0 8.6 1.4 10 5 6.4 8.6 10 10 8.6 6.4 5"/>
            </svg>
        </button>
    `;
  }

  private onClick(listener: ListenerType) {
    this.button.onclick = listener;
  }
}

import {Utils} from '../utils/utils';
import {CLOSE_BUTTON_ID} from '../constants';
import {ButtonComponent} from './components/button-component';
import {Blacklist} from '../blacklist/blacklist';
import {Channel} from './channel/channel';

export class Video {
  public id: string;

  public hidden = false;

  public readonly element: HTMLElement;

  private channel: Channel;

  private button: ButtonComponent;

  private readonly regex: RegExp = /[0-9A-Za-z_-]{11}/;

  public constructor(el: Element) {
    this.element = el as HTMLElement;

    try {
      this.id = this.getId();
      this.channel = new Channel(this);
      this.button = this.createButton();
    } catch (e) {
      throw new Error('Video: ' + e);
    }
  }

  public hide(): void {
    this.element.style.display = 'none';
    this.hidden = true;

    Utils.log(`Remove ${this.id}`);
  }

  private async onClickListener(e: MouseEvent): Promise<void> {
    e.preventDefault();
    e.stopPropagation();

    await Blacklist.addChannel(this.channel.id, this.channel.name);

    Utils.log(`Adding channel ${this.channel.name} ${this.channel.id}`);
  }

  private createButton() {
    const buttonExists = this.element.querySelector(`#${CLOSE_BUTTON_ID}`) !== null;

    if (buttonExists) {
      return;
    }

    return new ButtonComponent(this.element, this.onClickListener.bind(this));
  }

  private getId() {
    const thumbnail = this.element.querySelector('#thumbnail');
    const uri = thumbnail.getAttribute('href');

    const matches = this.regex.exec(uri);

    if (matches === null) {
      throw new Error(`No matches found for ${uri}`);
    }

    return matches[0].replace('v=', '');
  }
}

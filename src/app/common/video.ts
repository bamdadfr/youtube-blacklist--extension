import {Channel} from './channel';
import {ButtonComponent} from '../components/button.component';
import {Blacklist} from './blacklist';
import {Utils} from '../utils/utils';

export class Video {
  public readonly id: string;

  public container: HTMLElement;

  public hidden = false;

  private channel: Channel;

  public constructor(el: HTMLElement) {
    this.container = el;
    this.id = this.getId();
    this.channel = new Channel(this);
    new ButtonComponent(this, this.onClickListener.bind(this));
  }

  public hide(): void {
    this.container.style.display = 'none';
    this.hidden = true;

    Utils.log(`Remove ${this.id} (${this.channel.name})`);
  }

  private getId() {
    const thumbnail = this.container.querySelector('#thumbnail');
    const uri = thumbnail.getAttribute('href');

    const regex = /[0-9A-Za-z_-]{11}/;
    const matches = regex.exec(uri);

    if (matches === null) {
      throw new Error(`No matches found for ${uri}`);
    }

    return matches[0].replace('v=', '');
  }

  private async onClickListener(e: MouseEvent): Promise<void> {
    e.preventDefault();
    e.stopPropagation();

    await Blacklist.addChannel(this.channel.id, this.channel.name);

    Utils.log(`Adding channel ${this.channel.name} ${this.channel.id}`);
  }
}

import {Channel} from './channel';
import {ButtonComponent} from '../components/button.component';
import {Blacklist} from './blacklist';
import {Utils} from '../utils/utils';

export class Video {
  public id: string;

  public container: HTMLElement;

  public hidden = false;

  private button: ButtonComponent;

  private channel: Channel;

  public constructor(el: HTMLElement) {
    this.container = el;

    this.getId().then((id) => {
      this.id = id;
      this.channel = new Channel(this);
      this.button = new ButtonComponent(this, this.onClickListener.bind(this));
    });
  }

  public hide(): void {
    this.container.style.display = 'none';
    this.hidden = true;

    Utils.log(`Remove ${this.id} (${this.channel.name})`);
  }

  private async getThumbnail() {
    return Utils.promisify((resolve, retry) => {
      const thumbnail = this.container.querySelector('#thumbnail');

      if (!thumbnail) {
        return retry();
      }

      resolve(thumbnail);
    });
  }

  private getId() {
    return this.getThumbnail().then((thumbnail) => {
      const uri = thumbnail.getAttribute('href');

      const regex = /[0-9A-Za-z_-]{11}/;
      const matches = regex.exec(uri);

      if (matches === null) {
        throw new Error(`No matches found for ${uri}`);
      }

      return matches[0].replace('v=', '');
    });
  }

  private async onClickListener(e: MouseEvent): Promise<void> {
    e.preventDefault();
    e.stopPropagation();

    await Blacklist.addChannel(this.channel.id, this.channel.name);

    Utils.log(`Adding channel ${this.channel.name} ${this.channel.id}`);
  }
}

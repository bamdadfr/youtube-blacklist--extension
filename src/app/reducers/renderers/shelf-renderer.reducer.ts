import {ChannelByVideoInterface} from '../../maps/channel-by-video.map';
import {ShelfRendererInterface} from '../../types';
import {AbstractRendererReducer} from './abstract-renderer.reducer';
import {VerticalListRendererReducer} from './vertical-list-renderer.reducer';
import {
  ExpandedShelfContentsRendererReducer,
} from './expanded-shelf-contents-renderer.reducer';

export class ShelfRendererReducer implements AbstractRendererReducer {
  private readonly renderer: ShelfRendererInterface;

  public constructor(data: ShelfRendererInterface) {
    this.renderer = data;
  }

  public reduce(): ChannelByVideoInterface {
    const acc = {};

    const {
      verticalListRenderer,
      expandedShelfContentsRenderer,
    } = this.renderer.content;

    if (verticalListRenderer) {
      const r = new VerticalListRendererReducer(verticalListRenderer);
      Object.assign(acc, r.reduce());
    }

    if (expandedShelfContentsRenderer) {
      const r = new ExpandedShelfContentsRendererReducer(expandedShelfContentsRenderer);
      Object.assign(acc, r.reduce());
    }

    return acc;
  }
}

import {VideoEntity} from '../types';

export type ParserCollection = {[key: string]: ParserCollection;}

export class Parser {
  private readonly collection: ParserCollection;

  private readonly keysToMatch: string[];

  private results: VideoEntity[] = [];

  public constructor(data: ParserCollection, keysToMatch: string[]) {
    this.collection = data;
    this.keysToMatch = keysToMatch;
  }

  public parse(): VideoEntity[] {
    this.iterate(this.collection);
    return this.results;
  }

  private iterate(obj: ParserCollection | unknown[]): void {
    if (obj.constructor.name === 'Object') {
      const keys = Object.keys(obj);

      for (let i = 0; i < keys.length; ++i) {
        const key = keys[i];
        const value = (<ParserCollection>obj)[key];

        if (this.keysToMatch.includes(key)) {
          this.results = [
            ...this.results,
            obj as unknown as VideoEntity,
          ];
          
          continue;
        }

        if (value.constructor.name === 'Object') {
          this.iterate(value);
        } else if (value.constructor.name === 'Array') {
          this.iterate(value);
        }
      }
    } else if (obj.constructor.name === 'Array') {
      for (let i = 0; i < obj.length; ++i) {
        const value = (<ParserCollection>obj)[i];

        if (value.constructor.name === 'Object') {
          this.iterate(value);
        } else if (value.constructor.name === 'Array') {
          this.iterate(value);
        }
      }
    }
  }
}

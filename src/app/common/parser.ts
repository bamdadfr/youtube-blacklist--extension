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

      for (const key of keys) {
        const value = (<ParserCollection>obj)[key];

        if (this.keysToMatch.includes(key)) {
          this.results = [
            ...this.results,
            obj as unknown as VideoEntity,
          ];

          continue;
        }

        this.continue(value);
      }
    } else if (obj.constructor.name === 'Array') {
      for (let i = 0; i < obj.length; ++i) {
        const value = (<ParserCollection>obj)[i];
        
        this.continue(value);
      }
    }
  }

  private continue(value: ParserCollection) {
    if (
      value.constructor.name === 'Object'
      || value.constructor.name === 'Array'
    ) {
      this.iterate(value);
    }
  }
}

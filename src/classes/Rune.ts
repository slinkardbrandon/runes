import { IAett } from '../interfaces/IAett';

export interface IRuneParams {
  name: string;
  imageUrl: string;
  aett?: IAett;
}

export class Rune {
  public readonly name: string;
  public readonly imageUrl: string;
  // aett must be defined eventually, while this is a work in progress
  // we'll allow undefined though
  public readonly aett?: IAett;

  constructor(params: IRuneParams) {
    this.name = params.name;
    this.imageUrl = params.imageUrl;
    this.aett = params.aett;
  }
}

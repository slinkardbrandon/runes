import { IAett } from '../interfaces/IAett';

export interface IRuneParams {
  name: string;
  imageUrl: string;
  aett: IAett;
}

export class Rune {
  public readonly name: string;
  public readonly imageUrl: string;
  public readonly aett: IAett;

  constructor(params: IRuneParams) {
    this.name = params.name;
    this.imageUrl = params.imageUrl;
    this.aett = params.aett;
  }
}

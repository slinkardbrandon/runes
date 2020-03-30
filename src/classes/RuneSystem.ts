import { Rune } from "./Rune";

export interface IRuneSystem {
  name: string;
}

export class RuneSystem {
  constructor(public readonly name: string, public readonly runes: Rune[]) {}
}

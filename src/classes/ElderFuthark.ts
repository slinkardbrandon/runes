import { Rune } from './Rune';
import { RuneSystem, IRuneSystem } from './RuneSystem';
import { AettOfFreya } from './aettir/Freya';
import { AettOfHeimdall } from './aettir/Heimdall';
import { AettOfTiwaz } from './aettir/Tiwaz';

export class ElderFuthark extends RuneSystem implements IRuneSystem {
  public name: string = 'Elder Futhark';

  constructor() {
    super('Elder Futhark', [
      /**
       * Start the first aett, the aett of Freya
       */
      new Rune({
        name: 'fehu',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/0/07/Runic_letter_fehu.png',
        aett: new AettOfFreya(),
      }),
      new Rune({
        name: 'uruz',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/8/8e/Runic_letter_uruz.png',
        aett: new AettOfFreya(),
      }),
      new Rune({
        name: 'thurisaz',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/e/ee/Runic_letter_thurisaz.png',
        aett: new AettOfFreya(),
      }),
      new Rune({
        name: 'ansuz',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/3/35/Runic_letter_ansuz.png',
        aett: new AettOfFreya(),
      }),
      new Rune({
        name: 'raido',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/c/cf/Runic_letter_raido.png',
        aett: new AettOfFreya(),
      }),
      new Rune({
        name: 'kenaz',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/a/a3/Runic_letter_kauna.png',
        aett: new AettOfFreya(),
      }),
      new Rune({
        name: 'gebo',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/2/23/Runic_letter_gebo.png',
        aett: new AettOfFreya(),
      }),
      new Rune({
        name: 'wunjo',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/3/3f/Runic_letter_wunjo.png',
        aett: new AettOfFreya(),
      }),
      /**
       * Start the second aett, the aett of Heimdall
       */
      new Rune({
        name: 'haglaz',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/2/25/Runic_letter_haglaz.png',
        aett: new AettOfHeimdall(),
      }),
      new Rune({
        name: 'naudiz',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/b/b9/Runic_letter_naudiz.png',
        aett: new AettOfHeimdall(),
      }),
      new Rune({
        name: 'isa',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/b/bc/Runic_letter_isaz.png',
        aett: new AettOfHeimdall(),
      }),
      new Rune({
        name: 'jera',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/0/01/Runic_letter_jeran.png',
        aett: new AettOfHeimdall(),
      }),
      new Rune({
        name: 'Eihwaz',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/3/3e/Runic_letter_iwaz.png',
        aett: new AettOfHeimdall(),
      }),
      new Rune({
        name: 'perthro',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/b/bf/Runic_letter_pertho.png',
        aett: new AettOfHeimdall(),
      }),
      new Rune({
        name: 'algiz',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/1/14/Runic_letter_algiz.png',
        aett: new AettOfHeimdall(),
      }),
      new Rune({
        name: 'sowilo',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/c/c8/Runic_letter_sowilo.png',
        aett: new AettOfHeimdall(),
      }),
      /**
       * Start the third Aett, the aett of Tiwaz
       */
      new Rune({
        name: 'tiwaz',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/a/a3/Runic_letter_tiwaz.png',
        aett: new AettOfTiwaz(),
      }),
      new Rune({
        name: 'berkanan',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/c/ca/Runic_letter_berkanan.png',
        aett: new AettOfTiwaz(),
      }),
      new Rune({
        name: 'ehwaz',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/2/2e/Runic_letter_ehwaz.png',
        aett: new AettOfTiwaz(),
      }),
      new Rune({
        name: 'mannaz',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/0/0c/Runic_letter_mannaz.png',
        aett: new AettOfTiwaz(),
      }),
      new Rune({
        name: 'laukaz',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/a/a9/Runic_letter_laukaz.png',
        aett: new AettOfTiwaz(),
      }),
      new Rune({
        name: 'ingwaz',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/6/6d/Runic_letter_ingwaz.png',
        aett: new AettOfTiwaz(),
      }),
      new Rune({
        name: 'dagaz',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/c/c6/Runic_letter_dagaz.png',
        aett: new AettOfTiwaz(),
      }),
      new Rune({
        name: 'othalan',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/1/16/Runic_letter_othalan.png',
        aett: new AettOfTiwaz(),
      }),
    ]);
  }
}

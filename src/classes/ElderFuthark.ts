import { Rune } from "./Rune";
import { RuneSystem, IRuneSystem } from "./RuneSystem";

export class ElderFuthark extends RuneSystem implements IRuneSystem {
  public name: string = "Elder Futhark";

  constructor() {
    super("Elder Futhark", [
      new Rune(
        "fehu",
        "https://upload.wikimedia.org/wikipedia/commons/0/07/Runic_letter_fehu.png"
      ),
      new Rune(
        "uruz",
        "https://upload.wikimedia.org/wikipedia/commons/8/8e/Runic_letter_uruz.png"
      ),
      new Rune(
        "thurisaz",
        "https://upload.wikimedia.org/wikipedia/commons/e/ee/Runic_letter_thurisaz.png"
      ),
      new Rune(
        "ansuz",
        "https://upload.wikimedia.org/wikipedia/commons/3/35/Runic_letter_ansuz.png"
      ),
      new Rune(
        "raido",
        "https://upload.wikimedia.org/wikipedia/commons/c/cf/Runic_letter_raido.png"
      ),
      new Rune(
        "kauna",
        "https://upload.wikimedia.org/wikipedia/commons/a/a3/Runic_letter_kauna.png"
      ),
      new Rune(
        "gebo",
        "https://upload.wikimedia.org/wikipedia/commons/2/23/Runic_letter_gebo.png"
      ),
      new Rune(
        "wunjo",
        "https://upload.wikimedia.org/wikipedia/commons/3/3f/Runic_letter_wunjo.png"
      ),
      new Rune(
        "haglaz",
        "https://upload.wikimedia.org/wikipedia/commons/2/25/Runic_letter_haglaz.png"
      ),
      new Rune(
        "naudiz",
        "https://upload.wikimedia.org/wikipedia/commons/b/b9/Runic_letter_naudiz.png"
      ),
      new Rune(
        "isaz",
        "https://upload.wikimedia.org/wikipedia/commons/b/bc/Runic_letter_isaz.png"
      ),
      new Rune(
        "jeran",
        "https://upload.wikimedia.org/wikipedia/commons/0/01/Runic_letter_jeran.png"
      ),
      new Rune(
        "iwaz",
        "https://upload.wikimedia.org/wikipedia/commons/3/3e/Runic_letter_iwaz.png"
      ),
      new Rune(
        "pertho",
        "https://upload.wikimedia.org/wikipedia/commons/b/bf/Runic_letter_pertho.png"
      ),
      new Rune(
        "algiz",
        "https://upload.wikimedia.org/wikipedia/commons/1/14/Runic_letter_algiz.png"
      ),
      new Rune(
        "sowilo",
        "https://upload.wikimedia.org/wikipedia/commons/c/c8/Runic_letter_sowilo.png"
      ),
      new Rune(
        "tiwaz",
        "https://upload.wikimedia.org/wikipedia/commons/a/a3/Runic_letter_tiwaz.png"
      ),
      new Rune(
        "berkanan",
        "https://upload.wikimedia.org/wikipedia/commons/c/ca/Runic_letter_berkanan.png"
      ),
      new Rune(
        "ehwaz",
        "https://upload.wikimedia.org/wikipedia/commons/2/2e/Runic_letter_ehwaz.png"
      ),
      new Rune(
        "mannaz",
        "https://upload.wikimedia.org/wikipedia/commons/0/0c/Runic_letter_mannaz.png"
      ),
      new Rune(
        "laukaz",
        "https://upload.wikimedia.org/wikipedia/commons/a/a9/Runic_letter_laukaz.png"
      ),
      new Rune(
        "ingwaz",
        "https://upload.wikimedia.org/wikipedia/commons/6/6d/Runic_letter_ingwaz.png"
      ),
      new Rune(
        "dagaz",
        "https://upload.wikimedia.org/wikipedia/commons/c/c6/Runic_letter_dagaz.png"
      ),
      new Rune(
        "othalan",
        "https://upload.wikimedia.org/wikipedia/commons/1/16/Runic_letter_othalan.png"
      )
    ]);
  }
}

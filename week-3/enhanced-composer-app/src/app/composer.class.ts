import { IComposer } from "./composer.interface";

export class Composer {
  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      {
        composerId: 100, fullName: "Taylor Swift", genre:"Pop"
      },
      {
        composerId: 101, fullName: "Connor Price", genre: "Pop Rap"
      },
      {
        composerId: 102, fullName: "Thomas Mac", genre: "Country"
      },
      {
        composerId: 103, fullName: "Beyonce", genre: "Pop"
      },
      {
        composerId: 104, fullName: "Shakira", genre: "Pop"
      }
    ];
  }

  getComposers() {
    return this.composers;
  }

  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }
}

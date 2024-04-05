/**
 * title: composer-list.component.ts
 * purpose: typescript file for composer-list component
 * author: Cody Skelton
 * date: 04.03.2024
 * code derived from WEB 425 week 2 assignment 4 requirements
 */

import { Component, OnInit } from '@angular/core';

export default class Composer {
  fullName: String;
  genre: String;

  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Array<Composer>;

  constructor() {
    this.composers = [
      new Composer("Taylor Swift", "Pop"),
      new Composer("Connor Price", "Pop Rap"),
      new Composer("Thomas Mac", "Country"),
      new Composer("Beyonce", "Pop"),
      new Composer("Shakira", "Pop")
    ];
  }

  ngOnInit(): void {
  }

}

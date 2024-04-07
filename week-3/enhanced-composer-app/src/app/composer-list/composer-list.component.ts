/**
 * title: composer-list.component.ts
 * purpose: typescript file for composer-list component
 * author: Cody Skelton
 * date: 04.03.2024
 * code derived from WEB 425 week 2 assignment 4 requirements
 */

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>;

  constructor() {
    this.composers = new Composer().getComposers();
  }

  ngOnInit(): void {
  }

}

/**
 * title: composer-list.component.ts
 * purpose: typescript file for composer-list component
 * author: Cody Skelton
 * date: 04.03.2024
 * code derived from WEB 425 week 2 assignment 4 requirements
 */

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Observable<IComposer[]>;
  txtSearchControl = new FormControl('');

  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();

    //Any time we enter value into search control, that value will change and emit value changes event
    //After 500ms, we'll call filterComposers method
    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val));
  }

  ngOnInit(): void {
  }

  filterComposers(name: string) {
    this.composers = this.composerService.filterComposers(name);
  }

}

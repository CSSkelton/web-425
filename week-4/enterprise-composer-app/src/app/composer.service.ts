import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

// Injectables included in class tells Angular to make an instance of that class for us
@Injectable({
  providedIn: 'root'
})

export class ComposerService {

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

  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }

  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }

  // Running tests, search will fail if capital letters input. Why?? Shouldn't toLowerCase() allow this?
  filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(map(composers => composers.filter(composer => composer.fullName.toLowerCase().indexOf(name) > -1)));
  }
}

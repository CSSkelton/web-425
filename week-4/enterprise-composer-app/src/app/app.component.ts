/**
 * title: app.component.ts
 * purpose: declarations for app as a whole
 * author: Cody Skelton
 * date modified: 04.16.2024
 * code requirements derived from WEB 425 program requirements
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment = 'Exercise 4.4 - Async Pipe'
  title = 'composer-app';
}

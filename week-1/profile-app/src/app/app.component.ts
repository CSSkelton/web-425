/**
*Title: app.component.ts
*Purpose: main component TypeScript file
*Date: 03.24.2024
*Author: Cody Skelton
*Code attribution: Code sourced from Professor Krasso's YouTube video at https://www.youtube.com/watch?v=XRm0SnUJROU&ab_channel=Devression and WEB 425's Exercise 1.5 program requirements
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string='Assignment 1.5 - Components';
}

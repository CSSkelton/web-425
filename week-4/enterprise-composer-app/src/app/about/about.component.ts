/**
 * title: app.component.ts
 * purpose: declarations for app as a whole
 * author: Cody Skelton
 * date modified: 04.16.2024
 * code requirements derived from WEB 425 program requirements
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

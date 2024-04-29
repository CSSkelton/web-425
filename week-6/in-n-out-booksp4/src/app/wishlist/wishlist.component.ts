/**
 * title: wishlist.component.ts
 * author: Cody Skelton
 * date created: 04.27.2024
 * Code derived from WEB 425 exercise requirements
 */

import { Component, OnInit } from '@angular/core';
import { IWishListItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  items: Array<IWishListItem> = [];

  constructor() { }

  ngOnInit(): void {
  }

  updateItemsHandler(item: IWishListItem) {
    this.items.push(item);
  }

}

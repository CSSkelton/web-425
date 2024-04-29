/**
 * title: wishlist-create.component.ts
 * author: Cody Skelton
 * date created: 04.27.2024
 * Code sourced from WEB 425 exercise requirements
 */

import { IWishListItem } from './../wishlist-item.interface';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.scss']
})
export class WishlistCreateComponent implements OnInit {

  @Output() addItemEmitter = new EventEmitter<IWishListItem>();

  item: IWishListItem;

  constructor() {
    this.item = {} as IWishListItem;
  }

  ngOnInit(): void {
  }

  addItem() {
    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors
    })

    this.item = {} as IWishListItem;
  }

}

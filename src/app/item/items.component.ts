import { Component, OnInit } from '@angular/core'

import {BackendService, FirebaseService} from "../services";
import { Item } from './item'
import { ItemService } from './item.service'
import {RouterExtensions} from '@nativescript/angular';

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})

export class ItemsComponent implements OnInit {
  items: Array<Item>

  constructor(private itemService: ItemService, 
              private routerExtensions: RouterExtensions, 
              private firebaseService: FirebaseService
              ) {}

  ngOnInit(): void {
    this.items = this.itemService.getItems()
  }

  logout() {
    this.firebaseService.logout()
    this.routerExtensions.navigate(["/login"], { clearHistory: true } )
  }

}

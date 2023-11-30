import { Component, OnInit } from '@angular/core'
import {Observable} from 'rxjs'
import {FirebaseService} from "../services"
import { Item } from './item'
import { ReceiptService } from './item.service'
import {RouterExtensions} from '@nativescript/angular';
import { Receipt } from '../models'

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})

export class ItemsComponent implements OnInit {
  items: Array<Receipt>

  constructor(private receiptService: ReceiptService, 
              private routerExtensions: RouterExtensions, 
              private firebaseService: FirebaseService
              ) {}

  ngOnInit(): void {
    this.items = this.receiptService.getItems()
    //this.receipts$ = this.firebaseService.getMyReceipts();
  }

  logout() {
    this.firebaseService.logout()
    this.routerExtensions.navigate(["/login"], { clearHistory: true } )
  }

}

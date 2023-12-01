import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { ReceiptService } from './item.service'
import { Receipt } from '../models'

@Component({
  selector: 'ns-details',
  templateUrl: './item-detail.component.html',
})
export class ItemDetailComponent implements OnInit {
  receipt: Receipt

  constructor(private itemService: ReceiptService, 
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params.id
    this.receipt = this.itemService.getItem(id)
  }
}

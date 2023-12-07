import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { ReceiptDetailService } from './item-detail.service'
import { Receipt } from '../models'

@Component({
  selector: 'ns-details',
  templateUrl: './item-detail.component.html',
})
export class ItemDetailComponent implements OnInit {
  receipt: Receipt

  constructor(private receiptService: ReceiptDetailService, 
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params.id
    this.receipt = this.receiptService.getItem(id)
  }
}

import { Injectable } from '@angular/core'
import { firebase } from '@nativescript/firebase-core'
import '@nativescript/firebase-firestore'
import { Receipt } from '../models'
import { BackendService } from "~/app/services/backend.service"

@Injectable({
  providedIn: 'root',
})

export class ReceiptService {
  private receiptCollection;
  private receipts = new Array<Receipt>

  constructor () {
    this.receiptCollection = firebase().firestore().collection("userData/" + BackendService.token + "/receipts");
    this.loadItems();
  }

  loadItems (){
    new Promise((resolve, reject) => {
    this.receiptCollection.get()
      .then(querySnapshot => {
        querySnapshot.forEach(document => {
          this.receipts.push({
            "id": document.id,
            "merchantName": document.data().merchantName,
            "merchantAddress": document.data().merchantAddress,
            "merchantCity": document.data().merchantCity,
            "merchantState": document.data().merchantState,
            "date": document.data().date,
            "paymentType": document.data().paymentType,
            "taxAmount": document.data().taxAmount,            
            "receiptTotal": document.data().receiptTotal,
            "calculatedSubTotal": document.data().calculatedSubTotal,
            "totalGCO2e": document.data().totalGCO2e,
        })
        });
        resolve(true)
      })
      .catch(err => {
        console.log(err)
        reject(err)
      })
    })
  }

  getItems() {
    return this.receipts
  }

  getItem(id: string): Receipt {
    return this.receipts.filter((receipt) => receipt.id === id)[0]
  }
}

import { Injectable } from '@angular/core'
import { firebase } from '@nativescript/firebase-core'
import { BackendService } from "../services/backend.service"


@Injectable({
  providedIn: 'root',
})

export class ReceiptService {
  private receiptCollection;

  constructor () {
    this.receiptCollection = firebase().firestore().collection("userData/" + BackendService.token + "/receipts").orderBy('date', "desc")
  }

  loadItems (){
    new Promise((resolve, reject) => {
    this.receiptCollection.get()
      .then(querySnapshot => {
        resolve(this.parseSnapshot(querySnapshot))
      })
      .catch(err => {
        console.log(err)
        reject(err)
      })
    })
  }

  watchReceipts(callback: Function) {
    this.receiptCollection.onSnapshot(querySnapshot => callback(this.parseSnapshot(querySnapshot)))
  }

  private parseSnapshot(querySnapshot) {
    const receiptsTmp = [];
    querySnapshot.forEach(document => {
      receiptsTmp.push({
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
        "imageURL": document.data().imageURL,
        "lineItems": document.data().lineItems
      })
    })
    return receiptsTmp;
  }


}

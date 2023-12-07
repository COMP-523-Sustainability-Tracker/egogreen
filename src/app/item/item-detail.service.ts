import { Injectable } from '@angular/core'
import { firebase } from '@nativescript/firebase-core'
import '@nativescript/firebase-firestore'
import { Receipt } from '../models'
import { BackendService } from "~/app/services/backend.service"

@Injectable({
  providedIn: 'root',
})

export class ReceiptDetailService {
  private receiptCollection;
  private receipts = new Array<Receipt>

  constructor () {
    this.receiptCollection = firebase().firestore().collection("userData/" + BackendService.token + "/receipts/");
    this.loadItems();
  }

  loadItems (){
    new Promise((resolve, reject) => {
    this.receiptCollection.get()
      .then(querySnapshot => {
        querySnapshot.forEach(document => {
          // var lineItems = []
          // document.data().lineItems.forEach (line => {
          //   var category = "Unable to classify, calculated as Food/Grocery"
          //   if(line.data().ununspscCODE != "50000000") {
          //     line.data().unspscDescription.forEach (cat => {
          //       if(category == "none") {
          //         category = cat.data()
          //       }
          //     })
          //   }
            
          //   lineItems.push({
          //     id: document.data().id,
          //     description: document.data().description,
          //     quantity: document.data().quantity,
          //     unitPrice: document.data().unitPrice,
          //     totalPrice: document.data().totalPrice,
          //     unspscCODE: document.data().unspscCODE,
          //     category: category,
          //     gco2e: document.data().gco2e
          //   })
          // })
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
            "imageURL": document.data().imageURL,
            "lineItems": document.data().lineItems
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

  getImageURL(imagePath: string) {
    return firebase().storage().ref(imagePath).getDownloadURL()
  }

  getItems() {
    return this.receipts
  }

  getItem(id: string): Receipt {
    return this.receipts.filter((receipt) => receipt.id === id)[0]
  }

  
}

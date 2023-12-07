import { Component, OnInit } from '@angular/core'
import {FirebaseService, BackendService} from "../services"
import { ReceiptService } from './item.service'
import {RouterExtensions} from '@nativescript/angular'
import { Receipt } from '../models'
import { requestPermissions, takePicture } from '@nativescript/camera'
import { knownFolders, ImageSource, ObservableArray, Observable } from '@nativescript/core'
const enums = require("@nativescript/core/core-types").Enums
import { init } from '@nativescript/background-http'
init();

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})

export class ItemsComponent extends Observable implements OnInit {
  items = new ObservableArray<Receipt>()
  totalSpend =  0.00
  totalCO2 =  0.00

  constructor(private receiptService: ReceiptService, private routerExtensions: RouterExtensions, private firebaseService: FirebaseService) {
    super()
  }

  ngOnInit(): void {
    this.loadReceipts()   
  }

  getReceipts() {
    return this.items
  }

  loadReceipts() {
    this.receiptService.watchReceipts((receipts) => {
      this.processReceipts(receipts)
    })
  }

  private processReceipts(receipts) {
    this.items.length = 0
    var totalSpend = 0.00
    var totalCO2 = 0.00
    const receiptsTmp = <any>receipts;
    receiptsTmp.forEach((item) => {
      this.items.push(item)
      totalSpend += parseFloat(item.receiptTotal)
      totalCO2 += parseFloat(item.totalGCO2e)
    })

    this.totalSpend = parseFloat(totalSpend).toFixed(2)
    this.totalCO2 = parseFloat(totalCO2/1000).toFixed(2)
  }

  getItem(id: string): Receipt {
    console.log(id)
    console.log(this.items.length)
    console.log("filter: " + this.items.filter((receipt) => receipt.id === id)[0])
    return this.items.filter((receipt) => receipt.id === id)[0]
  }

  logout() {
    this.firebaseService.logout()
    this.routerExtensions.navigate(["/login"], { clearHistory: true } )
  }
  addReceipt() { 
    requestPermissions().then(
      function success() {
          // permission request accepted or already granted
          // ... call camera.takePicture here ...
          var myImageSource: ImageSource
          const options = {
            width: 600,
            height: 600,
            saveToGallery: false
        };
          takePicture(options)
          .then((imageAsset) => {
            //console.log("Result is an image asset instance");
            ImageSource.fromAsset(imageAsset).then(res => {
              myImageSource = res           
              const imagePath = knownFolders.documents().path + `/photo-${Date.now()}.jpg`
              myImageSource.saveToFile(imagePath, enums.ImageFormat.jpg)

              var url = 'https://egogreen-node-b713a1c6fb69.herokuapp.com/app/upload'
              //var url = 'http://10.15.20.64:8090/app/upload'
              var bghttp = require('@nativescript/background-http')
              var session = bghttp.session('image-upload')
              var request = {
                url: url,
                method: 'POST',
                headers: {
                  'Content-Type': 'application/octet-stream',
                  'authorization': BackendService.token

                }
              }

              var params = [{name:"image", filename: imagePath, mimeType: 'image/jpeg'}]
              return new Promise((resolve, reject) => {
              let task = session.multipartUpload(params, request)
              task.on('error', (e) => {
              reject(e)
              })
              task.on('complete', res => {
                alert({
                  title: 'Receipt Upload Complete!',
                  message: 'Please allow a few moments for receipt image processing and CO2 assessment.',
                  okButtonText: 'OK',
                  cancelable: true,
                })
                resolve(res)
              })
              })


          })

          }).catch((err) => {
              console.log("Error -> " + err.message);
          });

      },
      function failure() {
          // permission request rejected
          // ... tell the user ...
          console.log("Camera Permission Denied")
      }
    )
    }
}

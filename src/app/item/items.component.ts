import { Component, OnInit } from '@angular/core'
import {Observable} from 'rxjs'
import {FirebaseService, BackendService} from "../services"
import { ReceiptService } from './item.service'
import {RouterExtensions} from '@nativescript/angular';
import { Receipt } from '../models'
import { requestPermissions } from '@nativescript/camera';
import * as camera from "@nativescript/camera";
import { ImageSource, Image, ImageAsset } from "@nativescript/core";
import { knownFolders, path } from '@nativescript/core'
const enums = require("@nativescript/core/core-types").Enums;
import { init } from '@nativescript/background-http';
//import * as mime from 'mime-types'
init();

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
  addReceipt() { 
    requestPermissions().then(
      function success() {
          // permission request accepted or already granted
          // ... call camera.takePicture here ...
          var myImageSource: ImageSource
          const options = {
            width: 2048,
            height: 1536,
            keepAspectRatio: true,
            saveToGallery: false
        };
          camera.takePicture(options)
          .then((imageAsset) => {
            //console.log("Result is an image asset instance");
            ImageSource.fromAsset(imageAsset).then(res => {
              myImageSource = res
              //console.log(myImageSource)

              
              const imagePath = knownFolders.documents().path + `/photo-${Date.now()}.jpg`;
              console.log(imagePath)
              myImageSource.saveToFile(imagePath, enums.ImageFormat.jpg);

              var url = 'https://egogreen-node-b713a1c6fb69.herokuapp.com/app/upload';
              var bghttp = require('@nativescript/background-http');
              var session = bghttp.session('image-upload');
              var request = {
                url: url,
                method: 'POST',
                headers: {
                  'Content-Type': 'application/octet-stream',
                  'authorization': BackendService.token
                }
              }

              var params = [{name:"image", filename: imagePath, mimeType: 'image/jpeg'}];

              //console.log(request)
              //console.log(BackendService.token)

              return new Promise((resolve, reject) => {
              let task = session.multipartUpload(params, request)
              task.on('error', (e) => {
              reject(e)
              })
              task.on('complete', res => {
                alert("Upload Complete")
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

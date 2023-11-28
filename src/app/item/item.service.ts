import { Injectable } from '@angular/core'
import { firebase } from '@nativescript/firebase-core'
import '@nativescript/firebase-firestore'
import { Item } from './item'

@Injectable({
  providedIn: 'root',
})

export class ItemService {
  private itemCollection;
  private items = new Array<Item>

  constructor () {
    this.itemCollection = firebase().firestore().collection("testdata");
    this.loadItems();
  }

  loadItems (){
    new Promise((resolve, reject) => {
    this.itemCollection.get()
      .then(querySnapshot => {
        const items = []
        querySnapshot.forEach(document => {
          this.items.push({
            "id": parseInt(document.id),
            "name": document.data().name,
            "role": document.data().role,
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
    return this.items
  }

  getItem(id: number): Item {
    return this.items.filter((item) => item.id === id)[0]
  }
}

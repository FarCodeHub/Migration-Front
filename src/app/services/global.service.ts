
import { Injectable } from '@angular/core';

const BOOKMARK_STORAGE = "k2_bookmarks";
const CART_STORAGE = "k2_cart";
@Injectable({
  providedIn: 'root'
})
export class GlobalService {


  constructor() { }

  loadUser() {
  let item =  this.loadStorage("user");
    if (item != undefined && item != null)
    {
  let user = JSON.parse(item);
      if (user == null){
         user = [];
      return  user;
    }
    else
      return user;
    }
    return null;
}

  saveUser(user: any) {
    this.saveStorage("user", JSON.stringify(user));
  }


  saveStorage(storage: string, value: string) {
    localStorage.setItem(storage, value);
  }
  loadStorage(storage: string) {
    return localStorage.getItem(storage);
  }
}

import { Injectable } from '@angular/core';
import { Product,products } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  items : Product[]=[]
  constructor(private http:HttpClient) { }

  addToCart(product:Product) {
    this.items.push(product)
  }

  getItems() {
    return this.items;
  }

  getShippingDetails() {
    return this.http.get<{type: string, price: number}[]>
    ('/assets/prices.json');
  }
}

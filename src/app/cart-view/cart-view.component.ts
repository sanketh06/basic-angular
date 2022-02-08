import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../cartservice.service';
import { Product,products } from '../products';
import { Form, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {
  items:Product[]=[]
  checkoutForm= this.formBuilder.group({
   name : '',
   address  : ''
  });
  constructor(private cartser:CartserviceService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.items = this.cartser.getItems()
  }

  onSubmit() {
    console.warn('your details are shared successfully',this.checkoutForm.value)
  }
}

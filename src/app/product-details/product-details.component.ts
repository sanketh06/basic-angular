import { Component, OnInit } from '@angular/core';
import { Product,products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartserviceService } from '../cartservice.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product:Product | undefined
  constructor(private route:ActivatedRoute, private cartser:CartserviceService) { }

  ngOnInit(): void {
    const getUrl=this.route.snapshot.paramMap;
    const getIdFromUrl = Number(getUrl.get('productId'))
    this.product = products.find(product => product.id===getIdFromUrl)
  }

  addToCart(product:Product) {
    this.cartser.addToCart(product)
    window.alert(product.name+' is added to the cart successfully')
  }

}

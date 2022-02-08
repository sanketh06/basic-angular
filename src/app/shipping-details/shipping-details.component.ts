import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-shipping-details',
  templateUrl: './shipping-details.component.html',
  styleUrls: ['./shipping-details.component.css']
})
export class ShippingDetailsComponent implements OnInit {

  constructor(private cartser:CartserviceService) { }
  shippingdetails=this.cartser.getShippingDetails()
  
  ngOnInit(): void {
  }

}

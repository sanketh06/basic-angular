import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { ProductsAlertsComponent } from './products-alerts/products-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartViewComponent } from './cart-view/cart-view.component';
import { ShippingDetailsComponent } from './shipping-details/shipping-details.component';

@NgModule({
  declarations: [ 
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductsAlertsComponent,
    ProductDetailsComponent,
    CartViewComponent,
    ShippingDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'',component:ProductListComponent},
      {path:'details/:productId',component:ProductDetailsComponent},
      {path:'cart-view',component:CartViewComponent},
      {path:'shipping-details',component:ShippingDetailsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

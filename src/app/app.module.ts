import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ShoppingCartInfoComponent } from './shopping-cart-info/shopping-cart-info.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    ShoppingCartInfoComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot([  
      {path: '', component: ProductItemComponent},
      {path: 'info', component: ShoppingCartInfoComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

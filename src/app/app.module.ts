import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProductsComponent } from './components/shop/products/products.component';
import { FooterComponent } from './components/footer/footer.component';
import { FiltersComponent } from './components/shop/filters/filters.component';
import { SortButtonComponent } from './components/shop/sort-button/sort-button.component';
import { CartComponent } from './components/header/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShopComponent,
    ProductsComponent,
    FooterComponent,
    FiltersComponent,
    SortButtonComponent,
    CartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

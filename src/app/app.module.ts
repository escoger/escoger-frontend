import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_BOOTSTRAP_LISTENER } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatIconModule, MatInputModule,
  MatAutocompleteModule, MatChipsModule,
  MatFormFieldModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { MainFrameComponent } from './component/main-frame/main-frame.component';
import { PopularProductComponent } from './component/popular-product/popular-product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './component/slider/slider.component';
import { HttpClientModule }    from '@angular/common/http';
import { MobileComponent } from './component/mobile/mobile.component';
import { SearchBarComponent } from './component/search-bar/search-bar.component';
import { DataService } from './service/data.service';
import { MobileModelComponent } from './component/mobile-model/mobile-model.component';
import { ProductsComponent } from './component/products/products.component';
import { FilterMobileComponent } from './component/filter-mobile/filter-mobile.component';
import { AndroidMobileComponent } from './component/android-mobile/android-mobile.component';
import { MenuBarComponent } from './component/menu-bar/menu-bar.component';
import { AffiliatorComponent } from './component/affiliator/affiliator.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainFrameComponent,
    PopularProductComponent,
    SliderComponent,
    MobileComponent,
    SearchBarComponent,
    MobileModelComponent,
    ProductsComponent,
    FilterMobileComponent,
    AndroidMobileComponent,
    MenuBarComponent,
    AffiliatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    MatIconModule, MatInputModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatFormFieldModule,
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

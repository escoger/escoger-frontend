import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_BOOTSTRAP_LISTENER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { MenuBarComponent } from './component/menu-bar/menu-bar.component';
import { MainFrameComponent } from './component/main-frame/main-frame.component';
import { PopularProductComponent } from './component/popular-product/popular-product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './component/slider/slider.component';
import { HttpClientModule }    from '@angular/common/http';
import { MobileComponent } from './component/mobile/mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuBarComponent,
    MainFrameComponent,
    PopularProductComponent,
    SliderComponent,
    MobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

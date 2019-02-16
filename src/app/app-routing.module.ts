import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobileComponent }   from './component/mobile/mobile.component';
import { MainFrameComponent }  from './component/main-frame/main-frame.component';
import { MobileModelComponent } from './component/mobile-model/mobile-model.component';
import { AndroidMobileComponent } from './component/android-mobile/android-mobile.component';
const routes: Routes = [
  { path: 'androidmobiles', component: AndroidMobileComponent },
  { path : '', component: MainFrameComponent},
  { path: 'mobiles', component: MobileComponent },
  { path : '', component: MainFrameComponent},
  {
        path : 'mobilemodel/:model',
        component : MobileModelComponent,
        pathMatch: 'full'
  }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

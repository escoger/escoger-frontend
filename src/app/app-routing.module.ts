import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobileComponent }   from './component/mobile/mobile.component';
import { MainFrameComponent }  from './component/main-frame/main-frame.component';
const routes: Routes = [
  { path: 'mobiles', component: MobileComponent },
  { path : '', component: MainFrameComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

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
import { MenuBarComponent } from './component/menu-bar/menu-bar.component';
import { MainFrameComponent } from './component/main-frame/main-frame.component';
import { PopularProductComponent } from './component/popular-product/popular-product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './component/slider/slider.component';
import { HttpClientModule }    from '@angular/common/http';
import { MobileComponent } from './component/mobile/mobile.component';
import { SearchBarComponent } from './component/search-bar/search-bar.component';
import { DataService } from './service/data.service';
import { MenuContentComponent } from './component/menu-content/menu-content.component';
import { AllMobilesComponent } from './component/Mobiles/all-mobiles/all-mobiles.component';
import { AllLaptopsComponent } from './component/Laptops/all-laptops/all-laptops.component';
import { AllTvsComponent } from './component/TVs/all-tvs/all-tvs.component';
import { NokiaMobilesComponent } from './component/Mobiles//Brands/nokia-mobiles/nokia-mobiles.component';
import { SamsungMobilesComponent } from './component/Mobiles//Brands/samsung-mobiles/samsung-mobiles.component';
import { AppleMobilesComponent } from './component/Mobiles//Brands/apple-mobiles/apple-mobiles.component';
import { MiMobilesComponent } from './component/Mobiles//Brands/mi-mobiles/mi-mobiles.component';
import { OneplusMobilesComponent } from './component/Mobiles//Brands/oneplus-mobiles/oneplus-mobiles.component';
import { SmartphonesComponent } from './component/Mobiles/Categories/smartphones/smartphones.component';
import { AndroidPhonesComponent } from './component/Mobiles/Categories/android-phones/android-phones.component';
import { FourGMobilesComponent } from './component/Mobiles/Categories/four-g-mobiles/four-g-mobiles.component';
import { ThreeGMobilesComponent } from './component/Mobiles/Categories/three-g-mobiles/three-g-mobiles.component';
import { DualSimMobilesComponent } from './component/Mobiles/Categories/dual-sim-mobiles/dual-sim-mobiles.component';
import { SelfiePhonesComponent } from './component/Mobiles/Categories/selfie-phones/selfie-phones.component';
import { LatestMobilesComponent } from './component/Mobiles/Categories/latest-mobiles/latest-mobiles.component';
import { MostPopularMobilesComponent } from './component/Mobiles/Categories/most-popular-mobiles/most-popular-mobiles.component';
import { LessThanFiveKComponent } from './component/Mobiles/Prices/less-than-five-k/less-than-five-k.component';
import { FiveKToTenKComponent } from './component/Mobiles/Prices/five-k-to-ten-k/five-k-to-ten-k.component';
import { TenKToFifteenKComponent } from './component/Mobiles/Prices/ten-k-to-fifteen-k/ten-k-to-fifteen-k.component';
import { FifteenKToTwentyKComponent } from './component/Mobiles/Prices/fifteen-k-to-twenty-k/fifteen-k-to-twenty-k.component';
import { AboveTwentyKComponent } from './component/Mobiles/Prices/above-twenty-k/above-twenty-k.component';
import { AppleLaptopsComponent } from './component/Laptops/Brands/apple-laptops/apple-laptops.component';
import { SamsungLaptopsComponent } from './component/Laptops/Brands/samsung-laptops/samsung-laptops.component';
import { SonyLaptopsComponent } from './component/Laptops/Brands/sony-laptops/sony-laptops.component';
import { DellLaptopsComponent } from './component/Laptops/Brands/dell-laptops/dell-laptops.component';
import { ToshibaLaptopsComponent } from './component/Laptops/Brands/toshiba-laptops/toshiba-laptops.component';
import { HpLaptopsComponent } from './component/Laptops/Brands/hp-laptops/hp-laptops.component';
import { WindowsEightComponent } from './component/Laptops/Categories/windows-eight/windows-eight.component';
import { WindowsTenComponent } from './component/Laptops/Categories/windows-ten/windows-ten.component';
import { GamingLaptopsComponent } from './component/Laptops/Categories/gaming-laptops/gaming-laptops.component';
import { IntelCoreISevenComponent } from './component/Laptops/Categories/intel-core-i-seven/intel-core-i-seven.component';
import { IntelCoreIFiveComponent } from './component/Laptops/Categories/intel-core-i-five/intel-core-i-five.component';
import { IntelCoreIThreeComponent } from './component/Laptops/Categories/intel-core-i-three/intel-core-i-three.component';
import { LaptopsWithBacklitKeyboardComponent } from './component/Laptops/Categories/laptops-with-backlit-keyboard/laptops-with-backlit-keyboard.component';
import { TouchscreenLaptopsComponent } from './component/Laptops/Categories/touchscreen-laptops/touchscreen-laptops.component';
import { LatestLaptopsComponent } from './component/Laptops/Categories/latest-laptops/latest-laptops.component';
import { MostPopularLaptopsComponent } from './component/Laptops/Categories/most-popular-laptops/most-popular-laptops.component';
import { LessThanTwentyKComponent } from './component/Laptops/Prices/less-than-twenty-k/less-than-twenty-k.component';
import { TwentyKToThirtyKComponent } from './component/Laptops/Prices/twenty-k-to-thirty-k/twenty-k-to-thirty-k.component';
import { ThirtyKToFortyKComponent } from './component/Laptops/Prices/thirty-k-to-forty-k/thirty-k-to-forty-k.component';
import { FortyKToFiftyKComponent } from './component/Laptops/Prices/forty-k-to-fifty-k/forty-k-to-fifty-k.component';
import { FiftyKToSixtyKComponent } from './component/Laptops/Prices/fifty-k-to-sixty-k/fifty-k-to-sixty-k.component';
import { AboveSixtyKComponent } from './component/Laptops/Prices/above-sixty-k/above-sixty-k.component';
import { SonyTvsComponent } from './component/TVs/Brands/sony-tvs/sony-tvs.component';
import { SamsungTvsComponent } from './component/TVs/Brands/samsung-tvs/samsung-tvs.component';
import { MiTvsComponent } from './component/TVs/Brands/mi-tvs/mi-tvs.component';
import { PanasonicTvsComponent } from './component/TVs/Brands/panasonic-tvs/panasonic-tvs.component';
import { LgTvsComponent } from './component/TVs/Brands/lg-tvs/lg-tvs.component';
import { MicromaxTvsComponent } from './component/TVs/Brands/micromax-tvs/micromax-tvs.component';
import { SmartTvsComponent } from './component/TVs/Categories/smart-tvs/smart-tvs.component';
import { CurvedTvsComponent } from './component/TVs/Categories/curved-tvs/curved-tvs.component';
import { ThreeDTvsComponent } from './component/TVs/Categories/three-d-tvs/three-d-tvs.component';
import { FullHdResolutionComponent } from './component/TVs/Categories/full-hd-resolution/full-hd-resolution.component';
import { UptoTwentyThreeInchComponent } from './component/TVs/Categories/upto-twenty-three-inch/upto-twenty-three-inch.component';
import { TwentyFourInchToThirtyNineInchComponent } from './component/TVs/Categories/twenty-four-inch-to-thirty-nine-inch/twenty-four-inch-to-thirty-nine-inch.component';
import { FortyInchToFiftyFourInchComponent } from './component/TVs/Categories/forty-inch-to-fifty-four-inch/forty-inch-to-fifty-four-inch.component';
import { FiftyFiveInchAndAboveComponent } from './component/TVs/Categories/fifty-five-inch-and-above/fifty-five-inch-and-above.component';
import { LatestTvsComponent } from './component/TVs/Categories/latest-tvs/latest-tvs.component';
import { MostPopularTvsComponent } from './component/TVs/Categories/most-popular-tvs/most-popular-tvs.component';
import { TwentyKToFortyKComponent } from './component/TVs/Prices/twenty-k-to-forty-k/twenty-k-to-forty-k.component';
import { FortyKToSeventyKComponent } from './component/TVs/Prices/forty-k-to-seventy-k/forty-k-to-seventy-k.component';
import { AboveSeventyKComponent } from './component/TVs/Prices/above-seventy-k/above-seventy-k.component';
import { MotorolaMobilesComponent } from './component/Mobiles/Brands/motorola-mobiles/motorola-mobiles.component';
import { VivoMobilesComponent } from './component/Mobiles/Brands/vivo-mobiles/vivo-mobiles.component';
import { HonorMobilesComponent } from './component/Mobiles/Brands/honor-mobiles/honor-mobiles.component';
import { LenovoLaptopsComponent } from './component/Laptops/Brands/lenovo-laptops/lenovo-laptops.component';
import { AcerLaptopsComponent } from './component/Laptops/Brands/acer-laptops/acer-laptops.component';
import { AsusLaptopsComponent } from './component/Laptops/Brands/asus-laptops/asus-laptops.component';
import { MicrosoftLaptopsComponent } from './component/Laptops/Brands/microsoft-laptops/microsoft-laptops.component';
import { OnidaTvsComponent } from './component/TVs/Brands/onida-tvs/onida-tvs.component';
import { VideoconTvsComponent } from './component/TVs/Brands/videocon-tvs/videocon-tvs.component';
import { SansuiTvsComponent } from './component/TVs/Brands/sansui-tvs/sansui-tvs.component';
import { PhilipsTvsComponent } from './component/TVs/Brands/philips-tvs/philips-tvs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuBarComponent,
    MainFrameComponent,
    PopularProductComponent,
    SliderComponent,
    MobileComponent,
    SearchBarComponent,
	MenuContentComponent,
    AllMobilesComponent,
    AllLaptopsComponent,
    AllTvsComponent,
    NokiaMobilesComponent,
    SamsungMobilesComponent,
    AppleMobilesComponent,
    MiMobilesComponent,
    OneplusMobilesComponent,
    SmartphonesComponent,
    AndroidPhonesComponent,
    FourGMobilesComponent,
    ThreeGMobilesComponent,
    DualSimMobilesComponent,
    SelfiePhonesComponent,
    LatestMobilesComponent,
    MostPopularMobilesComponent,
    LessThanFiveKComponent,
    FiveKToTenKComponent,
    TenKToFifteenKComponent,
    FifteenKToTwentyKComponent,
    AboveTwentyKComponent,
    AppleLaptopsComponent,
    SamsungLaptopsComponent,
    SonyLaptopsComponent,
    DellLaptopsComponent,
    ToshibaLaptopsComponent,
    HpLaptopsComponent,
    WindowsEightComponent,
    WindowsTenComponent,
    GamingLaptopsComponent,
    IntelCoreISevenComponent,
    IntelCoreIFiveComponent,
    IntelCoreIThreeComponent,
    LaptopsWithBacklitKeyboardComponent,
    TouchscreenLaptopsComponent,
    LatestLaptopsComponent,
    MostPopularLaptopsComponent,
    LessThanTwentyKComponent,
    TwentyKToThirtyKComponent,
    ThirtyKToFortyKComponent,
    FortyKToFiftyKComponent,
    FiftyKToSixtyKComponent,
    AboveSixtyKComponent,
    SonyTvsComponent,
    SamsungTvsComponent,
    MiTvsComponent,
    PanasonicTvsComponent,
    LgTvsComponent,
    MicromaxTvsComponent,
    SmartTvsComponent,
    CurvedTvsComponent,
    ThreeDTvsComponent,
    FullHdResolutionComponent,
    UptoTwentyThreeInchComponent,
    TwentyFourInchToThirtyNineInchComponent,
    FortyInchToFiftyFourInchComponent,
    FiftyFiveInchAndAboveComponent,
    LatestTvsComponent,
    MostPopularTvsComponent,
    TwentyKToFortyKComponent,
    FortyKToSeventyKComponent,
    AboveSeventyKComponent,
    MotorolaMobilesComponent,
    VivoMobilesComponent,
    HonorMobilesComponent,
    LenovoLaptopsComponent,
    AcerLaptopsComponent,
    AsusLaptopsComponent,
    MicrosoftLaptopsComponent,
    OnidaTvsComponent,
    VideoconTvsComponent,
    SansuiTvsComponent,
    PhilipsTvsComponent
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

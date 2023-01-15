import { FeaturesModule } from './features';
import { SharedModule } from './shared';
import { AppRoutingModule } from './app.routing';
import { UiModule } from './ui';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/components/header/header.component';
import { MainLayoutComponent } from './layouts/containers/main-layout/main-layout.component';
import { MainPageComponent } from './pages';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainLayoutComponent,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    UiModule,
    FeaturesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

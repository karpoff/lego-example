import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {LegoSiteModule} from 'lego-site';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LegoSiteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

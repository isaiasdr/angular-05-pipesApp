import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

//local config
import LocaleEsVE from '@angular/common/locales/es-VE';
import LocaleFrCA from '@angular/common/locales/fr-CA';
import { registerLocaleData } from '@angular/common';

registerLocaleData( LocaleEsVE );
registerLocaleData( LocaleFrCA );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-VE' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

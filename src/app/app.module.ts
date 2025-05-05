import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleTagManagerModule } from 'angular-google-tag-manager';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleTagManagerModule.forRoot({
      id: 'GTM-MS8C2CF7'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

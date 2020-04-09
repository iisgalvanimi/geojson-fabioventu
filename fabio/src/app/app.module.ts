import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyC2rG9s6K1odnGzoc8HkNSPp2wov_z4Uio'}),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

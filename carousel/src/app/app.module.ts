import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemComponent } from './carousel/item/item.component';
import { CarouselComponent } from './carousel/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

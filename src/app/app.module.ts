import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// games service
import { GamesService } from './games.service';
import { GameviewComponent } from './gameview/gameview.component';

@NgModule({
  declarations: [
    AppComponent,
    GameviewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    GamesService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

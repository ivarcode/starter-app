import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// games service
import { GamesService } from './games.service';

// gameview component
import { GameviewComponent } from './gameview/gameview.component';
import { GamesComponent } from './games/games.component';

@NgModule({
  declarations: [AppComponent, GameviewComponent, GamesComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [GamesService],
  bootstrap: [AppComponent]
})
export class AppModule {}

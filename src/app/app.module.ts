import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// services
import { GamesService } from './games.service';

// components
import { GameviewComponent } from './gameview/gameview.component';
import { GamesComponent } from './games/games.component';
import { AddGameComponent } from './games/components/add-game/add-game.component';
import { FancyDirective } from './fancy.directive';
import { ChessGamePipe } from './chessgamepipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GameviewComponent,
    GamesComponent,
    AddGameComponent,
    FancyDirective,
    ChessGamePipe
  ],
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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameviewComponent } from './gameview/gameview.component';
import { GamesComponent } from './games/games.component';

const routes: Routes = [
  { path: 'game-details', component: GameviewComponent },
  { path: 'game-list', component: GamesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

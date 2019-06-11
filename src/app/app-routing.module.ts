import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameviewComponent } from './gameview/gameview.component';

const routes: Routes = [{ path: 'game-details', component: GameviewComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

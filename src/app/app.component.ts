import { Component } from '@angular/core';
import { GamesService } from './games.service';
import { Game } from './models/game.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  games: Game[];
  title = 'starter-app';
  constructor(private gamesService: GamesService) {}
  ngOnInit() {
    this.games = this.gamesService.getGames();
  }
  addGame() {
    this.games.push({id:this.games.length+1,white:'cam',black:'nick',numberOfMoves:75,result:'black wins by resignation in a drawn position'})
  }
}

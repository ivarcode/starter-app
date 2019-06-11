import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { Game } from '../models/game.interface';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: Game[];
  constructor(private gamesService: GamesService) {}

  ngOnInit() {
    this.games = this.gamesService.getGames();
  }

  addGame(): void {
    this.games.push({
      id: this.games.length + 1,
      white: 'cam',
      black: 'nick',
      numberOfMoves: 75,
      result: 'black wins by resignation in a drawn position'
    });
  }
  deleteGame(gid: number): void {
    this.games.splice(gid, 1);
  }
}

import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { Game } from '../models/game.interface';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: Game[];
  form = new FormGroup({
    game: new FormGroup({
      white: new FormControl(''),
      black: new FormControl(''),
      numberOfMoves: new FormControl(0),
      result: new FormControl('')
    })
  });

  constructor(private gamesService: GamesService) {}

  ngOnInit() {
    this.games = this.gamesService.getGames();
  }

  addGame(): void {
    const g = this.form.get('game') as FormGroup;
    console.log(g);
    this.games.push({
      id: this.games.length + 1,
      white: g.value.white,
      black: g.value.black,
      numberOfMoves: g.value.numberOfMoves,
      result: g.value.result
    });
  }
  deleteGame(gid: number): void {
    this.games.splice(gid, 1);
  }

  onSubmit() {
    this.addGame();
  }
}

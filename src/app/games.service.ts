import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  constructor() {}

  getGames() {
    return [
      {
        id: 1,
        white: 'Magnus Carlsen',
        black: 'Fabiano Caruana',
        result: 'draw',
        numberOfMoves: 53
      },
      {
        id: 2,
        white: 'Fabiano Caruana',
        black: 'Magnus Carlsen',
        result: 'draw',
        numberOfMoves: 49
      },
      {
        id: 3,
        white: 'Eric Hansen',
        black: 'Hikaru Nakamura',
        result: 'black wins by checkmate',
        numberOfMoves: 36
      },
      {
        id: 4,
        white: 'Hikaru Nakamura',
        black: 'Eric Hansen',
        result: 'draw',
        numberOfMoves: 68
      }
    ];
  }
}

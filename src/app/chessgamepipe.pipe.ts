import { Pipe, PipeTransform } from '@angular/core';
import { Game } from './models/game.interface';

@Pipe({
  name: 'chessgamepipe'
})
export class ChessGamePipe implements PipeTransform {
  transform(game: Game) {
    return (
      '<strong>' +
      game.white +
      ' vs ' +
      game.black +
      '</strong><br /> played ' +
      game.numberOfMoves +
      ' moves until ' +
      game.result
    );
  }
}

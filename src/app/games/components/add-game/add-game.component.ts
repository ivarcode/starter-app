import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'add-game',
  styleUrls: ['add-game.component.scss'],
  templateUrl: 'add-game.component.html'
})
export class AddGameComponent {
  @Input()
  parent: FormGroup;
}

import { Component, Input } from '@angular/core';
import { Game } from '../../../modules/game/domain/game.model';

@Component({
    selector: 'app-game-card',
    standalone: true,
    imports: [],
    templateUrl: './game-card.component.html',
    styleUrl: './game-card.component.scss'
})
export class GameCardComponent {
    @Input({required: true}) game: Game;
}

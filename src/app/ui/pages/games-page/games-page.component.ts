import { Component, OnInit, inject  } from '@angular/core';
import { GameUseCase } from '../../../modules/game/application/game-use-case.service';
import { GAME_API_PROVIDER } from '../../../modules/game/infrastructure/providers/api-game.provider';

@Component({
  selector: 'app-games-page',
  standalone: true,
  imports: [
  ],
  providers: [
    GameUseCase,
    GAME_API_PROVIDER
  ],
  templateUrl: './games-page.component.html',
  styleUrl: './games-page.component.scss'
})
export class GamesPageComponent implements OnInit {
  private _gameUseCase = inject(GameUseCase);

  ngOnInit(): void {
    this._gameUseCase.search();
  }
}

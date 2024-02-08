import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { GAME_API_RAWG_PROVIDER } from '../../../../../modules/game/infrastructure/providers/api-rawg-game.provider';
import { GameUseCaseService } from '../../../../../modules/game/application/game-use-case.service';
import { AutoDestroyService } from '../../../../../modules/shared/utils/auto-destroy.service';
import { GameListComponent } from '../../../../shared/game-list/game-list.component';

@Component({
    selector: 'app-games-page',
    standalone: true,
    imports: [
        GameListComponent
    ],
    providers: [
        GameUseCaseService,
        GAME_API_RAWG_PROVIDER,
        AutoDestroyService
    ],
    templateUrl: './games-page.component.html',
    styleUrl: './games-page.component.scss'
})
export class GamesPageComponent implements OnInit {
    $games = this.gameUseCaseService.$games;

    constructor(
        private gameUseCaseService: GameUseCaseService,
        private destroy: AutoDestroyService
    ) {
    }

    ngOnInit(): void {
        this.gameUseCaseService.search().pipe(takeUntil(this.destroy)).subscribe(resp => {
            console.log(resp.results);
            this.gameUseCaseService.setGames(resp.results);
        });
        console.log(this.$games);
    }

}

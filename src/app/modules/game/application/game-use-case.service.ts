import { Inject, Injectable, WritableSignal, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRawgGameRepository } from '../infrastructure/repositories/api-rawg-repository.service';
import { HTTP_API_RAWG_GAME_REPOSITORY } from '../infrastructure/providers/api-rawg-game.provider';
import { Game, SearchResult } from '../domain/game.model';

@Injectable({ providedIn: 'root' })
export class GameUseCaseService {
	$games: WritableSignal<Game[]> = signal([]);
	constructor(
		@Inject(HTTP_API_RAWG_GAME_REPOSITORY) public apiGameRepository: ApiRawgGameRepository
	) {}

	search(): Observable<SearchResult> {
		return this.apiGameRepository.search();
	}

	setGames(games: Game[]): void {
        this.$games.set(games);
    }
}
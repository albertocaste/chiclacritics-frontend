import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../domain/game.model';
import { ApiGameRepository } from '../infrastructure/repositories/api-game-repository.service';
import { HTTP_API_GAME_REPOSITORY } from '../infrastructure/providers/api-game.provider';

@Injectable({ providedIn: 'root' })
export class GameUseCase {
	constructor(
		@Inject(HTTP_API_GAME_REPOSITORY) public _apiGameRepository: ApiGameRepository
	) {}

	search(): Observable<Game[]> {
		return this._apiGameRepository.search();
	}
}
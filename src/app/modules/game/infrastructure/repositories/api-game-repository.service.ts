import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { Game, GameResponse, GameModelResponse } from '../../domain/game.model';
import { GameRepositoryContract } from '../../domain/contracts/game-respository-contract.interface';

@Injectable()
export class ApiGameRepository implements GameRepositoryContract {
	private _httpClient = inject(HttpClient);
	private readonly BASE_URL_BACKEND_API = environment.BASE_URL_BACKEND_API + 'games';

	search(): Observable<GameResponse[]> {
		return this._httpClient.get<GameResponse[]>(this.BASE_URL_BACKEND_API).pipe(
			map((response) =>
				response.map((gameApi) => ({
					id: gameApi.id,
					title: gameApi.title,
                    description: gameApi.description
				}))
			)
		);
	}
}
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
//import { environment } from '../../../../environments/environment';
import { Game, GameResponse, GameModelResponse } from '../domain/game.model';
import { GameRepository } from './game.interface';

@Injectable()
export class GameApiService implements GameRepository {
	private _httpClient = inject(HttpClient);
	private readonly URL_PRODUCTS = 'TODO API'; //environment.api + '/game';

	get(): Observable<GameResponse[]> {
		return this._httpClient.get<GameResponse[]>(this.URL_PRODUCTS).pipe(
			map((response) =>
				response.map((gameApi) => ({
					id: gameApi.id,
					title: gameApi.title,
                    description: gameApi.description
				}))
			)
		);
	}

	save(newGame: Game): Observable<GameModelResponse> {
		return this._httpClient
			.post<any>(this.URL_PRODUCTS, newGame)
			.pipe(map((response) => ({ message: response.message, code: response.code })));
	}
}
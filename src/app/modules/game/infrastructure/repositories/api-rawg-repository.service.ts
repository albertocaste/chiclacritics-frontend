import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { GameRepositoryContract } from '../../domain/contracts/game-respository-contract.interface';
import { SearchResult } from '../../domain/game.model';

@Injectable()
export class ApiRawgGameRepository implements GameRepositoryContract {
	private httpClient = inject(HttpClient);
	private readonly BASE_URL_RAWG_API = environment.BASE_URL_RAWG_API + 'games';

	search(): Observable<SearchResult> {
		return this.httpClient.get<SearchResult>(
            this.BASE_URL_RAWG_API
        );
	}


}
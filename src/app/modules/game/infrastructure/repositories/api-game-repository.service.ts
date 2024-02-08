import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { GameRepositoryContract } from '../../domain/contracts/game-respository-contract.interface';

@Injectable()
export class ApiGameRepository implements GameRepositoryContract {
	private httpClient = inject(HttpClient);
	private readonly BASE_URL_BACKEND_API = environment.BASE_URL_BACKEND_API + 'games';

	search(): Observable<any> {
		return this.httpClient.get<any>(this.BASE_URL_BACKEND_API);
	}
}
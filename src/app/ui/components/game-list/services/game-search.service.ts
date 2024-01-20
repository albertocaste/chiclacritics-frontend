import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameSearchService {

  constructor() { }

  private _httpClient = inject(HttpClient, );
	private readonly URL_PRODUCTS = environment.api + '/game';

  // Cambiar el any de la respuesta por el tipo de dato que toque
	search(name: string): Observable<any[]> {
		return this._httpClient.get<any[]>(this.URL_PRODUCTS).pipe(
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

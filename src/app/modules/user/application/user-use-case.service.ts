import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../domain/user.model';
//import { GameApiService } from '../infrastructure/game-api.interface';
//import { HTTP_GAME_SERVICE } from '../infrastructure/providers/game-api.provider';

@Injectable({ providedIn: 'root' })
export class ProductUseCaseService {
	/* constructor(@Inject(HTTP_GAME_SERVICE) private GameApiService: IProductApiService) {}

	get(): Observable<Game[]> {
		return this.GameApiService.getProducts();
	}

	create(newProduct: Game): Observable<Game> {
		return this.GameApiService.save(newProduct);
	} */
}
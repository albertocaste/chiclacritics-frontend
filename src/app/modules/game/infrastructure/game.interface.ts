import { Observable } from 'rxjs';
import { Game, GameResponse, GameModelResponse } from '../domain/game.model';

export interface GameRepository {
	get(): Observable<GameResponse[]>;
	save(newProduct: Game): Observable<GameModelResponse>;
}
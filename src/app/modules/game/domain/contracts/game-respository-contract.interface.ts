import { Observable } from 'rxjs';
import { Game, GameResponse, GameModelResponse } from '../game.model';

export interface GameRepositoryContract {
	search(): Observable<GameResponse[]>;
}
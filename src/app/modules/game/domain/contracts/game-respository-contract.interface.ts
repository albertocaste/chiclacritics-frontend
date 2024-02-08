import { Observable } from 'rxjs';
import { SearchResult } from '../game.model';

export interface GameRepositoryContract {
	search(): Observable<SearchResult>;
}
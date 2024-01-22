import { Observable } from 'rxjs';
import { User, UserResponse, UserModelResponse } from '../domain/user.model';

export interface UserRepository {
	get(): Observable<UserResponse[]>;
	save(newUser: User): Observable<UserModelResponse>;
}
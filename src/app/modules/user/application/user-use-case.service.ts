import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserModelResponse } from '../domain/user.model';
import { UserRepository } from '../infrastructure/user.interface';
import { HTTP_API_USER_REPOSITORY } from '../infrastructure/providers/api-user.provider';
import { ApiUserRepository } from '../infrastructure/repositories/api-user-repository.service';

@Injectable({ providedIn: 'root' })
export class UserUseCase {
	constructor(
		@Inject(HTTP_API_USER_REPOSITORY) public _apiUserRepository: ApiUserRepository
	) {}

	/* search(): Observable<User> {
		return this._apiUserRepository.search();
	} */

	save(newUser: User): Observable<UserModelResponse> {
		return this._apiUserRepository.save(newUser);
	}
}
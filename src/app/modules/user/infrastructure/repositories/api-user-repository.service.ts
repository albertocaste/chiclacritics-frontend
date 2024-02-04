import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { User, UserResponse, UserModelResponse } from '../../domain/user.model';
import { UserRepositoryContract } from '../../domain/contracts/user-repository-contract.interface';

@Injectable()
export class ApiUserRepository implements UserRepositoryContract {
	private _httpClient = inject(HttpClient);
	private readonly BASE_URL_BACKEND_API = environment.BASE_URL_BACKEND_API + '/games';

	search(): Observable<UserResponse[]> {
		return this._httpClient.get<UserResponse[]>(this.BASE_URL_BACKEND_API).pipe(
			map((response) =>
				response.map((userApi) => ({
					id: userApi.id,
					email: userApi.email,
                    username: userApi.username,
					password: userApi.password
				}))
			)
		);
	}

	get(): Observable<UserResponse[]> {
		return this._httpClient.get<UserResponse[]>(this.BASE_URL_BACKEND_API).pipe(
			map((response) =>
				response.map((userApi) => ({
					id: userApi.id,
					email: userApi.email,
                    username: userApi.username,
					password: userApi.password
				}))
			)
		);
	}

	save(newUser: User): Observable<UserModelResponse> {
		return this._httpClient
			.post<any>(this.BASE_URL_BACKEND_API, newUser)
			.pipe(map((response) => ({ message: response.message, code: response.code })));
	}
}
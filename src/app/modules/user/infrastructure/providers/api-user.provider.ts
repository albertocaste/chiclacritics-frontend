import { InjectionToken, Provider } from "@angular/core";
import { UserRepositoryContract } from "../../domain/contracts/user-repository-contract.interface";
import { ApiUserRepository } from "../repositories/api-user-repository.service";

export const HTTP_API_USER_REPOSITORY = new InjectionToken<UserRepositoryContract>('ApiUserRepository');

export const USER_API_PROVIDER: Provider = {
    provide: HTTP_API_USER_REPOSITORY,
    useClass: ApiUserRepository
};
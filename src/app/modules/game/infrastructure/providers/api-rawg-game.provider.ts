
import { InjectionToken, Provider } from '@angular/core';
import { GameRepositoryContract } from '../../domain/contracts/game-respository-contract.interface';
import { ApiRawgGameRepository } from '../repositories/api-rawg-repository.service';

export const HTTP_API_RAWG_GAME_REPOSITORY = new InjectionToken<GameRepositoryContract>('ApiRawgGameRepository');

export const GAME_API_RAWG_PROVIDER: Provider = {
    provide: HTTP_API_RAWG_GAME_REPOSITORY,
    useClass: ApiRawgGameRepository
};
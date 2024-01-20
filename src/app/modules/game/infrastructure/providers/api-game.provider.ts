
import { InjectionToken, Provider } from '@angular/core';
import { GameRepositoryContract } from '../../domain/contracts/game-respository-contract.interface';
import { ApiGameRepository } from '../repositories/api-game-repository.service';

export const HTTP_API_GAME_REPOSITORY = new InjectionToken<GameRepositoryContract>('ApiGameRepository');

export const GAME_API_PROVIDER: Provider = {
    provide: HTTP_API_GAME_REPOSITORY,
    useClass: ApiGameRepository
};
import { Routes } from '@angular/router';
import { GameComponent } from './ui/components/game/game.component';

export const routes: Routes = [
    {
        path: 'games',
        component: GameComponent,
        data: {
            title: 'games',
            breadcrumb: 'games'
        }
    }
];

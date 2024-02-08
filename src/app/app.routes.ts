import { Routes } from '@angular/router';

import { LoginComponent } from './ui/features/login/login.component';
import { MainLayoutComponent } from './ui/features/main-layout/main-layout.component';
import { GAME_LIST_ROUTES } from './ui/features/games-list/game-list.routes';

export const ROUTES: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        data: {
            title: 'games',
            breadcrumb: 'games'
        },
        children: [ ...GAME_LIST_ROUTES]
    },
    {
        path: 'login',
        component: LoginComponent,
        data: {
            title: 'login',
            breadcrumb: 'login'
        }
    },
    {
        path: 'signin',
        component: LoginComponent,
        data: {
            title: 'signin',
            breadcrumb: 'signin'
        }
    }
];

import { Routes } from '@angular/router';
import { MainLayoutComponent } from './ui/pages/main-layout/main-layout.component';
import { gameListRoutes } from './ui/components/game-list/game-list.routes';
import { GamesPageComponent } from './ui/pages/games-page/games-page.component';
import { LoginComponent } from './ui/pages/login/login.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        data: {
            title: 'games',
            breadcrumb: 'games'
        },
        children: [ ...gameListRoutes]
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

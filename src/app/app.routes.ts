import { Routes } from '@angular/router';
import { MainLayoutComponent } from './ui/pages/main-layout/main-layout.component';
import { gameListRoutes } from './ui/components/game-list/game-list.routes';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        data: {
            title: 'games',
            breadcrumb: 'games'
        },
        children: [ ...gameListRoutes]
    }
];

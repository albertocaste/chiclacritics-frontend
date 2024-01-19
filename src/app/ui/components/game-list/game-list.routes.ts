import { Routes } from "@angular/router";

export const gameListRoutes: Routes = [
    {
        path: 'games',
        loadComponent: () =>
            import('../../pages/games-page/games-page.component').then(
                (m) => m.GamesPageComponent
            ),
    },
];
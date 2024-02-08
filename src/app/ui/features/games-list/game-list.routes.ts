import { Routes } from '@angular/router';
import { GamesPageComponent } from './pages/games-page/games-page.component';

export const GAME_LIST_ROUTES: Routes = [
  {
    path: '',
    component: GamesPageComponent,
  },
  {
    path: 'games',
    component: GamesPageComponent,
  }
];
import { Component, OnInit } from '@angular/core';
import { GameSearchService } from '../../components/game-list/services/game-search.service';

@Component({
  selector: 'app-games-page',
  standalone: true,
  imports: [],
  templateUrl: './games-page.component.html',
  styleUrl: './games-page.component.scss'
})
export class GamesPageComponent implements OnInit {
  constructor(
    private gameSearchService: GameSearchService
  ) {}

  ngOnInit(): void {
    console.log("asda");
    this.gameSearchService.search('test');
  }
}

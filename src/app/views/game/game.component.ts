import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../../services/games/games.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})

export class GameComponent implements OnInit {
  gameId: string = '';
  gameDetails: any;

  constructor(private route: ActivatedRoute, private gamesService: GamesService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.gameId = params.get('id') ?? ''; // Se params.get('id') for null, define gameId como uma string vazia
      this.getGameDetails();
    });
  }

  getGameDetails() {
    this.gamesService.getGameDetails(this.gameId).subscribe(data => {
      this.gameDetails = data;
    });
  }
}
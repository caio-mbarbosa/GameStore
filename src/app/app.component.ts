import { Component } from '@angular/core';
import { GamesService } from './services/games/games.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SelecaoVlab';
  games: any[] = [];

  constructor(private gamesService: GamesService){}

  ngOnInit(){
    this.gamesService.getAllGames().subscribe(data => {
      this.games = data;
      console.log("Result:", this.games);
    });
  }
}

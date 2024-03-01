import { HttpClient } from '@angular/common/http';
import { AbstractType, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  baseUrl = "http://" + window.location.hostname + ":4123/https://www.freetogame.com/api/";

  constructor(private http: HttpClient) { }

  getAllGames(): Promise<any> {
    return fetch(this.baseUrl + "games", { method: 'GET' })
      .then(response => {
        if (!response.ok) { throw new Error(`HTTP error! Status: ${response.status}`); }
        return response.json();
      })
  }

  getGameDetails(gameId: string): Observable<any>{
    return this.http.get(this.baseUrl + "game?id="+gameId);
  }
  
  getSimilarGames(genre: string, id: string){
    let gamesStr = localStorage.getItem('games')
    let games: any[] = [];
    if (gamesStr != null) {
      games = JSON.parse(gamesStr);
    } else {
      return;
    }
    games = games.filter(game => {
      return (
        game.genre === genre &&
        game.id !== id
      );
    });
    let gameCount = games.length;

    if (gameCount < 4) {
      games = games.slice(0, gameCount)
    } else {
      games = games.slice (0, 4)
    }
    return games;
  }
}

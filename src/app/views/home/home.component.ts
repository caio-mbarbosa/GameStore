import { Component } from '@angular/core';
import { GamesService } from '../../services/games/games.service';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title = 'SelecaoVlab';
  games: any[] = [];
  filteredGames: any[] = [];

  developers: string[] = [];
  categories: string[] = [];

  selectedDeveloper: string = '';
  selectedCategory: string = '';
  selectedYear: string = '';

  constructor(private gamesService: GamesService){}

  ngOnInit(){
    this.gamesService.getAllGames().subscribe(data => {
      this.games = data;
      this.filteredGames = this.games; // Inicializar a lista de jogos filtrada com todos os jogos
      this.loadDevelopersAndCategories(); // Carregar as opções de desenvolvedoras e categorias
      console.log("Result:", this.games);
    });
  }

  loadDevelopersAndCategories() {
    // Extrair todas as desenvolvedoras e categorias dos jogos
    this.developers = Array.from(new Set(this.games.map(game => game.developer)));
    this.categories = Array.from(new Set(this.games.map(game => game.genre)));
  }

  applyFilters() {
    this.filteredGames = this.games.filter(game => {
      let includeGame = true;

      if(this.selectedDeveloper != "" && game.developer !== this.selectedDeveloper){
        return false
      }
      
      if(this.selectedCategory != "" && game.genre !== this.selectedCategory){
        return false
      }

      if(this.selectedYear != "" && game.release_date.slice(0,4) != this.selectedYear){
        return false
      }
  
      return true;
    });
  }

  clearContent(){
    this.filteredGames = [];
  }
}

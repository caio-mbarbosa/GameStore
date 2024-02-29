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
  platforms: string[] = [];

  selectedDeveloper: string = '';
  selectedCategory: string = '';
  selectedPlatform: string = '';
  selectedYear: string = '';

  // Variáveis de controle para a ordenação
  nameSortOrder: string = 'asc'; 
  releaseDateSortOrder: string = 'asc';
  devSortOrder: string = 'asc';  

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
    this.platforms = Array.from(new Set(this.games.map(game => game.platform)));
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

      if(this.selectedPlatform != "" && game.platform !== this.selectedPlatform){
        return false
      }

      if(this.selectedYear != "" && game.release_date.slice(0,4) != this.selectedYear){
        return false
      }
  
      return true;
    });
  }

  sortByName() {
    if (this.nameSortOrder === 'asc') {
      this.filteredGames.sort((a, b) => a.title.localeCompare(b.title));
      this.nameSortOrder = 'desc';
    } else {
      this.filteredGames.sort((a, b) => b.title.localeCompare(a.title));
      this.nameSortOrder = 'asc';
    }
  }

  sortByReleaseDate() {
    if (this.releaseDateSortOrder === 'asc') {
      this.filteredGames.sort((a, b) => new Date(a.release_date).getTime() - new Date(b.release_date).getTime());
      this.releaseDateSortOrder = 'desc';
    } else {
      this.filteredGames.sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime());
      this.releaseDateSortOrder = 'asc';
    }
  }

  sortByDev() {
    if (this.devSortOrder === 'asc') {
      this.filteredGames.sort((a, b) => a.developer.localeCompare(b.title));
      this.devSortOrder = 'desc';
    } else {
      this.filteredGames.sort((a, b) => b.developer.localeCompare(a.title));
      this.devSortOrder = 'asc';
    }
  }
}

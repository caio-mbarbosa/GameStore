import { Component } from '@angular/core';
import { GamesService } from '../../services/games/games.service';
import { FavoriteService } from '../../services/games/favorite.service';
import { FilterDropdownComponent } from '../../components/filter-dropdown.component';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})

export class HomeComponent {
  title = 'SelecaoVlab';
  games: any[] = [];
  filteredGames: any[] = [];
  isFavoriteFilterActive: boolean = false;

  developers: string[] = [];
  categories: string[] = [];
  platforms: string[] = [];
  releaseYears: string[] = [];
  sortByOptions: string[] = ["Year", "Name", "Developer"]

  selectedDeveloper: string = '';
  selectedCategory: string = '';
  selectedPlatform: string = '';
  selectedYear: string = '';

  // Variáveis de controle para a ordenação
  nameSortOrder: string = 'asc'; 
  releaseDateSortOrder: string = 'asc';
  devSortOrder: string = 'asc';  

  constructor(private gamesService: GamesService, private favoriteService: FavoriteService){}

  ngOnInit(){
    let games = localStorage.getItem('games');
    if (games) {
        this.initGames(JSON.parse(games))
    }
    this.gamesService.getAllGames()
    .then(responseJson => {
      localStorage.setItem('games', JSON.stringify(responseJson));
      this.initGames(responseJson)
      console.log("Result:", this.games);
    })
  }

  initGames(data: any) {
    this.games = data;
    this.filteredGames = this.games; // Inicializar a lista de jogos filtrada com todos os jogos
    this.loadDevelopersAndCategories(); // Carregar as opções de desenvolvedoras e categorias
  }

  loadDevelopersAndCategories() {
    // Extrair todas as desenvolvedoras e categorias dos jogos
    this.developers = Array.from(new Set(this.games.map(game => game.developer.trim())));
    this.developers.sort();
    this.categories = Array.from(new Set(this.games.map(game => game.genre.trim())));
    this.categories.sort();
    this.platforms = Array.from(new Set(this.games.map(game => game.platform.trim())));
    this.platforms.sort();
    this.releaseYears = Array.from(new Set(this.games.map(game => game.release_date.slice(0,4))));
    this.releaseYears.sort();
    this.releaseYears.reverse();

    console.log(this.categories);
  }

  applyFilters() {
    console.log("|" + this.selectedDeveloper + "|");

    this.filteredGames = this.games.filter(game => {
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

  sort(type: string) {
    if (type === "Year") {
      this.sortByReleaseDate()
    } else if (type === "Name") {
      this.sortByName()
    } else if (type === "Developer") {
      this.sortByDev()
    }
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

  isFavorite(id: string): boolean {
    return this.favoriteService.getFavorites().includes(id);
  }

  toggleFavorite(event: Event, id: string) {
    event.stopPropagation();
    this.favoriteService.toggleFavorite(id);
    console.log("Cliquei em favoritar!", this.isFavorite(id));
  }

  toggleFavoriteFilter() {
    this.isFavoriteFilterActive = !this.isFavoriteFilterActive;
    
    if (this.isFavoriteFilterActive) {
        this.filteredGames = this.games.filter(game => this.favoriteService.getFavorites().includes(game.id));
    } else {
        // Caso contrário, filtra os jogos que não são favoritos
        this.filteredGames = this.games.filter(game => !this.favoriteService.getFavorites().includes(game.id));
    }
}
}

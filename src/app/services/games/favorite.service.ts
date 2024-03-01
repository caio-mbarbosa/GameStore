import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favorites: string[] = [];

  constructor() {
    this.loadFavorites();
  }

  loadFavorites() {
    const favorites = localStorage.getItem('favorites');
    if (favorites) {
      this.favorites = JSON.parse(favorites);
    }
  }

  getFavorites(): string[] {
    return this.favorites;
  }

  toggleFavorite(id: string) {
    const index = this.favorites.indexOf(id);
    if (index !== -1) {
      this.favorites.splice(index, 1);
    } else {
      this.favorites.push(id);
    }
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
}
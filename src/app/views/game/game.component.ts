import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../../services/games/games.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})

export class GameComponent implements OnInit {
  gameId: string = '';
  gameGenre: string = '';
  gameDetails: any;
  games: any[] = [];
  similarGames: any[] = [];

  constructor(private route: ActivatedRoute, private gamesService: GamesService, private elementRef: ElementRef, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.gameId = params.get('id') ?? ''; // Se params.get('id') for null, define gameId como uma string vazia
      this.getGameDetails();
    });
  }

  getGameDetails() {
    this.gamesService.getGameDetails(this.gameId).subscribe(data => {
      this.gameDetails = data;
      console.log(this.gameDetails);
      //this.similarGames = this.gamesService.getSimilarGames(this.gameGenre, this.gameId)
    });
  }

  goToHome() {
    this.router.navigate(['/']); // O caminho para a página inicial
}

  currentIndex = 0;

  next() {
    if (this.currentIndex < this.gameDetails.screenshots.length - 1) {
      this.currentIndex++;
      this.scroll();
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.scroll();
    }
  }

  private scroll() {
    const itemWidth = this.elementRef.nativeElement.querySelector('.carousel-item').offsetWidth;
    const scrollAmount = itemWidth * this.currentIndex;
    const carouselWrapper = this.elementRef.nativeElement.querySelector('.carousel-wrapper');
    if (carouselWrapper instanceof HTMLElement) {
      carouselWrapper.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }
}
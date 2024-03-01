import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesService } from './services/games/games.service';
import { GameComponent } from './views/game/game.component';
import { HomeComponent } from './views/home/home.component';
import { FilterDropdownComponent } from './components/filter-dropdown.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    FilterDropdownComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CarouselModule.forRoot()
  ],
  providers: [GamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

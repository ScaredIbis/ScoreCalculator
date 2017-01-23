import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';

import { AppComponent } from './app.component';
import { GamesComponent } from './games.component';
import { SherriffComponent } from './sherriff.component';

import { HeroService } from './hero.service';


@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  RouterModule.forRoot([
                    {
                      path: 'sheriff',
                      component: SherriffComponent
                    },
                  ])
                ],
  declarations: [ AppComponent,
                  GamesComponent
                ],
  providers:    [ HeroService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

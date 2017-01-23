import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';

import { AppComponent } from './app.component';
import { GamesComponent } from './games.component';
import { SherriffComponent } from './sherriff.component';


@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  RouterModule.forRoot([
                    {
                      path: 'games',
                      component: GamesComponent
                    },
                    { path: 'sherriff',
                      component: SherriffComponent
                    }
                  ])
                ],
  declarations: [ AppComponent,
                  GamesComponent,
                  SherriffComponent
                ],
  providers:    [  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

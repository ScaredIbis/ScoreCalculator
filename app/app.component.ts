import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <nav>
    <a routerLink="/sherriff">Sherriff Of Nottingham</a>
  </nav>
  <router-outlet></router-outlet>
  `
})

export class AppComponent {
    title = 'Game Score Calculator';
}

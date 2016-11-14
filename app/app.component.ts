import { Component } from '@angular/core';

@Component({
  selector: 'rpgwiki-app',
  template: `<h1>RPG Wiki!</h1>
            <nav>
              <a routerLink="" routerLinkActive="active">Home</a>
              <a routerLink="/new" routerLinkActive="active">New</a>
            </nav>
            <router-outlet></router-outlet>`
})
export class AppComponent { }

import { Component } from '@angular/core';
import {ListService} from '../rpgwiki.shared/rpgwiki.list';

@Component({
  template: `
    <h2>Home</h2>
    <p>TODO: List of articles</p>
    <div *ngFor="let item of listSrv.list">{{item}}</div>`
})
export class HomeComponent {
  listSrv:ListService;
  constructor(listSrv: ListService) {
      this.listSrv = listSrv;
      listSrv.addToList("Item " + (listSrv.list.length + 1));
  }
}
import { Component } from '@angular/core';
import {ListService} from '../rpgwiki.shared/rpgwiki.list';

@Component({
  template: `
    <h2>New Article</h2>
    <p>TODO: New article form</p>
    <div *ngFor="let item of listSrv.list">{{item}}</div>`
})
export class NewArticleComponent { 
  listSrv:any;
  constructor(listSrv: ListService) {
      this.listSrv = listSrv;
      listSrv.addToList("Item " + (listSrv.list.length + 1));
  }
}
import { NgModule }             from '@angular/core';
import { RouterModule }         from '@angular/router';

import { HomeComponent }        from './rpgwiki.home/rpgwiki.home';
import { NewArticleComponent }  from './rpgwiki.new-article/rpgwiki.new-article';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'new', component: NewArticleComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

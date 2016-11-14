import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { RouterModule }         from '@angular/router';

import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app.routing-module';

import {ListService}            from './rpgwiki.shared/rpgwiki.list';

import { HomeComponent }        from './rpgwiki.home/rpgwiki.home';
import { NewArticleComponent }  from './rpgwiki.new-article/rpgwiki.new-article';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    NewArticleComponent
  ],
  providers: [
    ListService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

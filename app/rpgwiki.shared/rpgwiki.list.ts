import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable()
export class ListService {
    public list:Array<string>=["Item 1","Item 2"];
    public addToList(str){
        this.list.push(str);
    }
}
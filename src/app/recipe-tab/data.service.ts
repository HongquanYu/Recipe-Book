import { Http } from '@angular/http';

import axios from 'axios';

import { NgForm } from '@angular/forms';
import { Recipe } from './recipe.model';
import { Injectable, Input } from '@angular/core';

@Injectable()
export class DataService {
    @Input() public hasData: boolean;
    @Input() public Recipes: Recipe[] = [];
    @Input() public btnClicked: boolean;
    @Input() public resultAmount: number = 0;
    
    private keyword: string = "";
    private apiKey = "1337291d29e8552cc680c826cd47011e";
    private apiKey2: string  = "0a775994c25e1a3e48a73bbf34be7559";
    private prefix: string  = "https://www.food2fork.com/api/search?key=";
    private connector = "&=";
    private query: string = "";
    private query2: string ="https://www.food2fork.com/api/search?key=0a775994c25e1a3e48a73bbf34be7559&q=chicken";
    
    constructor(private http: Http) {}
    
    @Input() public onGetData = async (form: NgForm) => {
     this.keyword = form.value.searchword;
     
     this.query = this.prefix + this.apiKey2 + this.connector + this.keyword;
  
     await axios.get(this.query)
     .then(response => {
       console.log(response);
       
       let data = response.data;
       this.resultAmount = data.count;
  
       for (let i = 0; i < data.count; ++i) {
         let el = data.recipes[i];
         this.Recipes.push(new Recipe( el.recipe_id, el.title, el.publisher, el.image_url, 0, ''));
       }
     })
     .catch(error => {
       console.log(error);
     });
  
     this.btnClicked = true;
     this.hasData = (this.Recipes.length > 0) ? true : false;
    }
}
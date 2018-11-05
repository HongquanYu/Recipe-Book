import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-recipe-tab',
  templateUrl: './recipe-tab.component.html',
  styleUrls: ['./recipe-tab.component.css']
})
export class RecipeTabComponent implements OnInit {
  private hasData: boolean;
  public Recipes: Recipe[] = [];
  private btnClicked: boolean;
  private resultAmount: number = 0;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.hasData = this.dataService.hasData;
    this.Recipes = this.dataService.Recipes;
  }

}

import { DataService } from '../recipe-tab/data.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Recipe } from '../recipe-tab/recipe.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [DataService]
})
export class HeaderComponent implements OnInit {
  public hasData: boolean;
  public Recipes: Recipe[];
  public btnClicked: boolean;
  public resultAmount: number;

  constructor(private dataService: DataService) { }

  ngOnInit() { }
  
  onUpdateStatus(form: NgForm) {
    this.dataService.onGetData(form);
  }
}

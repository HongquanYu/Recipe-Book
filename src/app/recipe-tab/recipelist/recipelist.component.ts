import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css'],
  providers: [DataService]
})
export class RecipelistComponent implements OnInit {
  @Input() Recipes: Recipe[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onGetData(form: NgForm) {
    this.dataService.onGetData(form);
  }
}

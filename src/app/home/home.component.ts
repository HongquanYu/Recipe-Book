import { Component, OnInit, Injectable } from '@angular/core';
import { Http } from '@angular/http';

import axios from 'axios';

import { Recipe } from '../recipe-tab/recipe.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private hasData: boolean;
  public Recipes: Recipe[] = [];
  private btnClicked: boolean;
  private resultAmount: number = 0;

  ngOnInit() {}
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shoppinglist/shoppinglist.component';
import { VideoComponent } from './video/video.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RecipelistComponent } from './recipe-tab/recipelist/recipelist.component';
import { RecipeComponent } from './recipe-tab/recipe/recipe.component';
import { RecipeTabComponent } from './recipe-tab/recipe-tab.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', component: RecipeTabComponent },
  { path: 'shoppingList', component: ShoppingListComponent },
  { path: 'charts', component: VideoComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    VideoComponent,
    HomeComponent,
    HeaderComponent,
    RecipeComponent,
    RecipelistComponent,
    RecipeTabComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

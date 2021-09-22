import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from "./app-routing.module";
import { Practice2Component } from './practice2/practice2.component';
import { Practice3Component } from './practice3/practice3.component';
import { PokeDoceComponent } from './poke-doce/poke-doce.component';
import { LightOutComponent } from './light-out/light-out.component';
import { HeaderComponent } from './header/header.component';
import { BindingFormComponent } from './binding-form/binding-form.component';
import { BindingItemComponent } from './binding-form/binding-item/binding-item.component';
import { BindingControlComponent } from './binding-form/binding-control/binding-control.component';
import { MonsterSlayerComponent } from './monster-slayer/monster-slayer.component';
import { SlayerTabsComponent } from './monster-slayer/slayer-tabs/slayer-tabs.component';
import { SlayerControlsComponent } from './monster-slayer/slayer-controls/slayer-controls.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    Practice2Component,
    Practice3Component,
    PokeDoceComponent,
    LightOutComponent,
    HeaderComponent,
    BindingFormComponent,
    BindingItemComponent,
    BindingControlComponent,
    MonsterSlayerComponent,
    SlayerTabsComponent,
    SlayerControlsComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

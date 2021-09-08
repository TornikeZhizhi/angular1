import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { FormsModule } from '@angular/forms';
import { Practice2Component } from './practice2/practice2.component';
import { Practice3Component } from './practice3/practice3.component';
import { PokeDoceComponent } from './poke-doce/poke-doce.component';
import { LightOutComponent } from './light-out/light-out.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { HeaderComponent } from './header/header.component';
import { BindingFormComponent } from './binding-form/binding-form.component';
import { BindingItemComponent } from './binding-form/binding-item/binding-item.component';
import { BindingControlComponent } from './binding-form/binding-control/binding-control.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    Practice2Component,
    Practice3Component,
    PokeDoceComponent,
    LightOutComponent,
    RecipeComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    HeaderComponent,
    BindingFormComponent,
    BindingItemComponent,
    BindingControlComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

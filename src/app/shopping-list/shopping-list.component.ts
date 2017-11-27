import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Route } from '@angular/router/src/config';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private slService: ShoppingListService,
    private backbtn: Router,
    private reload: Router,
    private route: ActivatedRoute ) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }

  // tslint:disable-next-line:one-line
  goBack(){
    this.backbtn.navigate(['/recipes']);
  }

  // tslint:disable-next-line:one-line
  pageReload(){
    this.reload.navigate(['/shopping-list'], {relativeTo: this.route} );
  }
}

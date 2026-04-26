/* ========== Controller ========== */
import { GroceryModel } from './model.js';
import { GroceryView } from './view.js';

export class GroceryController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.subscribeGroceryListChanged(this.onGroceryListChanged);
    this.view.onAddGrocery(this.handleAddGrocery);
    this.view.onDeleteGrocery(this.handleDeleteGrocery);

    this.onGroceryListChanged(this.model.groceries);
  }

  onGroceryListChanged = (groceries) => {
    this.view.displayGroceries(groceries);
  };

  handleAddGrocery = (itemName, quantity) => {
    return this.model.addGrocery(itemName, quantity);
  };

  handleDeleteGrocery = (index) => {
    this.model.deleteGrocery(index);
  };
}

/* ========== Initialization ========== */

document.addEventListener('DOMContentLoaded', () => {
  new GroceryController(new GroceryModel(), new GroceryView());
});

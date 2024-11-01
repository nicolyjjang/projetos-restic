import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Item {
  name: string;
  purchased: boolean;
}

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  newItem: string = '';
  items: Item[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  addItem() {
    if (this.newItem.trim()) {
      this.items.push({ name: this.newItem, purchased: false });
      this.newItem = '';
    }
  }

  editItem(item: Item) {
    const newName = prompt("Editar item:", item.name);
    if (newName) {
      item.name = newName;
      this.cdr.detectChanges();
    }
  }

  togglePurchased(item: Item) {
    item.purchased = !item.purchased;
  }

  deleteItem(item: Item) {
    this.items = this.items.filter(i => i !== item);
  }

  getNotPurchasedItems(): Item[] {
    return this.items.filter(item => !item.purchased);
  }

  getPurchasedItems(): Item[] {
    return this.items.filter(item => item.purchased);
  }
}
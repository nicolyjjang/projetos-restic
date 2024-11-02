import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'] // Correção: de styleUrl para styleUrls
})
export class ShoppingListComponent {
  items: { name: string }[] = [];
  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) { // verifica se o campo não está vazio
      this.items.push({ name: this.newItem });
      this.newItem = ''; // limpa o campo depois de adicionar o novo item
    }
  }

  removeItem(item: { name: string }) {
    this.items = this.items.filter(i => i !== item); // remove o item da lista
  }
}
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  newItem: string = '';
  items: { name: string; purchased: boolean }[] = [];

  constructor(private cdr: ChangeDetectorRef) {} //injeta o ChangeDetectorRef, que forca a detecçao de mudanças

  addItem() {
    if (this.newItem.trim()) { // verifica espaços em branco, ou seja, se o item esta vazio
      this.items.push({ name: this.newItem, purchased: false }); // add novo item no array
      this.newItem = '';
    }
  }

  editItem(item: any) {
    const newName = prompt("Editar item:", item.name); //pedi um novo nome
    if (newName) { //caso seja fornecido,
      item.name = newName; //ele atualiza o nome do item
      this.cdr.detectChanges(); //força a mudança, garantindo que a interface seja atualizada
    }
  }

  togglePurchased(item: any) {
    item.purchased = !item.purchased; //alterna entre comprado e não comprado
  }

  deleteItem(item: any) {
    this.items = this.items.filter(i => i !== item); //filtra a lista para remover o item que o usuário quer tirar
  }
}
import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { CommonModule } from '@angular/common';

export interface ShoppingItem {
  id: number;
  title: string;
  userId: number;  
  included: boolean;
}

@Component({
  standalone: true, 
  selector: 'app-lista-de-compras',
  templateUrl: './lista-de-compras.component.html',
  styleUrls: ['./lista-de-compras.component.css'],
  imports: [CommonModule]
})
export class ListaDeComprasComponent implements OnInit {
  shoppingList: ShoppingItem[] = []; 

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.loadShoppingList();
  }

  loadShoppingList() {
    this.shoppingListService.getShoppingList().subscribe(
      (data: ShoppingItem[]) => {
        this.shoppingList = data;
      },
      (error: any) => {
        console.error('Erro ao carregar a lista de compras', error);
      }
    );
  }

  deleteTask(id: number) {
    this.shoppingListService.deleteTask(id).subscribe(
      (response) => {
        if (response.success) {
          this.loadShoppingList(); 
        } else {
          console.error(response.message);
        }
      },
      (error) => {
        console.error('Erro ao excluir a tarefa', error);
      }
    );
  }
}
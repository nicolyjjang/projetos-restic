import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { AuthService } from '../auth.service';  
import { Router } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

export interface ShoppingItem {
  id: number;
  title: string;
  userId: number;  
  included: boolean;
}

@Component({
  standalone: true, 
  selector: 'app-lista-de-compras',
  templateUrl: './lista-de-compras.component.html', // Caminho corrigido
  styleUrls: ['./lista-de-compras.component.css'],
  imports: [CommonModule, FormsModule] 
})
export class ListaDeComprasComponent implements OnInit {
  shoppingList: ShoppingItem[] = []; 
  newTask: { title: string } = { title: '' };
  apiUrl: any;

  constructor(
    private shoppingListService: ShoppingListService,
    private authService: AuthService,  
    private router: Router  
  ) {}

  ngOnInit() {
    this.loadShoppingList();
  }

  loadShoppingList() {
    this.shoppingListService.getShoppingList().subscribe(
      (data: ShoppingItem[]) => {
        this.shoppingList = data;
      },
      (error) => {
        console.error('Erro ao carregar a lista de compras', error);
      }
    );
  }

  addTask() {
    if (this.newTask && this.newTask.title && this.newTask.title.trim()) {
      const newId = this.shoppingList.length > 0 ? Math.max(...this.shoppingList.map(item => item.id)) + 1 : 1;

      const newItem: ShoppingItem = {
        id: newId, 
        title: this.newTask.title,
        userId: 1,
        included: false
      };

      this.shoppingListService.addTask(newItem).subscribe(
        (addedTask) => {
          this.shoppingList.push(addedTask);
          this.newTask.title = ''; 
        },
        (error) => {
          console.error('Erro ao adicionar a tarefa', error);
        }
      );
    } else {
      console.warn('O título da tarefa não pode estar vazio.');
    }
  }

  editItem(item: ShoppingItem) {
    const newTitle = prompt("Editar tarefa:", item.title);
    if (newTitle) {
      item.title = newTitle; 
      this.updateTask(item);  
    }
  }

  updateTask(updatedTask: ShoppingItem) {
    this.shoppingListService.updateTask(updatedTask).subscribe(
      (task) => {
        const index = this.shoppingList.findIndex(item => item.id === task.id);
        if (index !== -1) {
          this.shoppingList[index] = task; 
        }
      },
      (error) => {
        console.error('Erro ao atualizar a tarefa', error);
      }
    );
  }  

  deleteTask(id: number): void {
    console.log(`Tentando excluir o item com ID: ${id}`); 
  
    fetch(`${this.apiUrl}/shopping-list/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao excluir a tarefa');
        }
        return response.json(); 
      })
      .then(() => {
        this.shoppingList = this.shoppingList.filter(item => item.id !== id);
        console.log(`Item com ID: ${id} excluído com sucesso.`); 
      })
      .catch(error => {
        console.error('Erro ao excluir a tarefa', error);
      });
  }  

  logout() {
    this.authService.logout(); 
    this.router.navigate(['/login']); 
  }
}
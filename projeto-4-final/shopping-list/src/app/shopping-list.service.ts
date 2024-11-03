import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface ShoppingItem {
  id: number;
  title: string;
  userId: number;  
  included: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private apiUrl = 'http://localhost:3000/shopping-list';

  getShoppingList(): Observable<ShoppingItem[]> {
    return new Observable(observer => {
      fetch(this.apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          observer.next(data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }

  addTask(task: ShoppingItem): Observable<ShoppingItem> {
    return new Observable(observer => {
      fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      })
        .then(response => response.json())
        .then(data => {
          observer.next(data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }

  deleteTask(id: number): Observable<any> {
    return new Observable(observer => {
      fetch(`${this.apiUrl}/${id}`, {
        method: 'DELETE',
      })
        .then(response => {
          if (response.ok) {
            observer.next({ success: true });
            observer.complete();
          } else {
            observer.error('Failed to delete item');
          }
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }

  updateTask(task: ShoppingItem): Observable<ShoppingItem> {
    return new Observable(observer => {
      fetch(`${this.apiUrl}/${task.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      })
        .then(response => response.json())
        .then(data => {
          observer.next(data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }
}
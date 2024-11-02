import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private apiUrl = 'http://localhost:3000/shopping-list';

  constructor(private http: HttpClient) { }

  getsShoppingList(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }

  addTask(task: any): Observable<any>{
    return this.http.post<any>(this.apiUrl, task);
  }

  deleteTask(id:number): Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  updateTask(task: any): Observable<any>{
    return this.http.put<any>(`${this.apiUrl}/${task.id}`, task);
  }
}

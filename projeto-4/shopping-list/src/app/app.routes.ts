import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [ // Mudança para exportação nomeada
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '/login' }
];

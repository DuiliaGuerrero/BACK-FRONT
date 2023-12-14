import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { loginGuard } from './guards/login.guard';
import { UserListComponent } from './components/user-list/user-list.component';

export const routes: Routes = [
    {
        path:"register",
        component: RegisterComponent
    },
    {
        path:"login",
        component: LoginComponent
    },{
       path:"user/list",
       component: UserListComponent,
       canActivate: [loginGuard]
    },
    {
        path:"home",
        component: HomeComponent,
        
    },
    {   path: "**", 
        component: HomeComponent
    }
];

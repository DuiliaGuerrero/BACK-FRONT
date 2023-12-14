import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../models/users.models';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm:any;

  constructor(private userService: UserService, private router:Router){
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  onSubmit(){
    if(!this.loginForm.valid){
      return;
    }

    const user:User = {
      password: this.loginForm.value.password,
      email: this.loginForm.value.email,
    }

    this.userService.login(user).subscribe({
      next:(token)=>{
        this.userService.saveToken(token)
        this.router.navigate(['/home'])
      },
      error:(error) =>{
        console.log(error);

      }
    })

   
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm:any;

  constructor(private userService:UserService, private router:Router){
    this.registerForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      password: new FormControl(),
      password_confirmation: new FormControl(), 
    })
  }
  async onSubmit(){
    console.log(this.registerForm.value)
    const res = await this.userService.register(this.registerForm.value).subscribe(
      response=> {
        console.log(response)
      },
      error => {
        console.log(error)
      }
    )
    console.log(res)
  }
}

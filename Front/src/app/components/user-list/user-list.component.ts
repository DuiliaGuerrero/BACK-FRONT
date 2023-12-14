import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  constructor(private userService:UserService){}

  ngOnInit(){
    this.userService.userList().subscribe({
      next:(users)=>{
        console.log(users)
        
      },
      error:(error) =>{
        console.log(error);

      }
    })
  } 


}

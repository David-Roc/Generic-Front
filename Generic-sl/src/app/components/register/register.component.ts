import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';

//Model
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User = new User('','','','','');
  confirm_password:string = '';
  
  constructor(private userService:UserService, private route:Router) { }

  ngOnInit() {
  }

  submitted = false;

  onSubmit() { 
    this.submitted = true;

    this.userService.createUser(this.user).subscribe(
      data => {
        console.log('Todo Bien',data);
    },
      error => {
        console.log('Todo mal',error)
    });

    this.route.navigate(['login']);
  }

}

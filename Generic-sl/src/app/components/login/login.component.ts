import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Services
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService, private route:Router) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 registerMode = false;
//  users:any;
  constructor() {
   // this.getUsers();
  }

  ngOnInit(): void {
   // this.getUsers();
  }

  registerToggle(){
    debugger;
    this.registerMode = !this.registerMode;
  }

  // getUsers(){
  //   this.http.get("https://localhost:5001/api/Users").subscribe(users=>{
  //     this.users = users;
  //     console.log(this.users);

  //   },error=>{
  //     console.log(error);
  //   })
  // }

  cancelRegisterMode(event:boolean){
    this.registerMode=event;
  }

}

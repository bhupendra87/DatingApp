import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { AccountService } from 'src/_services/account.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any= {};
  // currentUser$: Observable<User>;
  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
    //this.getCurrentUser();
    // this.currentUser$ = this.accountService.currentUser$;
  }

  login(){
    console.log(this.model);
    this.accountService.login(this.model).subscribe(response=>{
      console.log(response);
      //this.loggedIn = true;
    })
  }

  logout(){
    this.accountService.logout();
    //this.loggedIn = false;

  }

  // getCurrentUser(){
  //   this.accountService.currentUser$.subscribe(user => {
  //     this.loggedIn= !!user;
  //   },error=>{
  //     console.log(error);
  //   })
  // }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import {map} from 'rxjs/operators';
import { User } from 'src/app/_models/user';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
 baseUrl1:string= "https://localhost:5001/api/";
 private currentUserSource = new ReplaySubject<User>(1);
 currentUser$ = this.currentUserSource.asObservable();
  constructor(private http: HttpClient) { }

  login(model:any){
    //return this.http.post(this.baseUrl + 'account/login',model);
    return this.http.post(this.baseUrl1 + 'account/login',model).pipe(
      map((response:User)=>{
        const user = response;
        if(user){
          localStorage.setItem('user',JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    );
  }

  register(model:any){
    return this.http.post(this.baseUrl1 + 'account/register', model).pipe(
      map((user: User)=>{
        if(user){
          localStorage.setItem('user',JSON.stringify(user));
          this.currentUserSource.next(user);
        }
        return user;
      })
    )
  }

  setCurrentUser(user:User){
   this.currentUserSource.next(user);
  }

  logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}

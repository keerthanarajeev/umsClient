import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor() { }

  // methode to control route
  isLoggedIn(){
    return !!localStorage.getItem("userName")  //return either true or false
  }
}

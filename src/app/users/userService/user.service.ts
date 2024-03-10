import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl='https://umsserver-5904.onrender.com'
  constructor(private http:HttpClient) { }


  // add user api

  addUser(bodyData:any){
    return this.http.post(`${this.baseUrl}/users`,bodyData)
  }

  // get all users

  getUser(){
    return this.http.get(`${this.baseUrl}/users`)
  }

  // delete usser

  deleteUser(id:any){
   return this.http.delete(`${this.baseUrl}/users/${id}`)

  }

  // access single user

  getUserData(uid:any){
    return this.http.get(`${this.baseUrl}/users/${uid}`)

  }

  // update data

  updateUser(id:any,bodyData:any){
    return this.http.put(`${this.baseUrl}/users/${id}`,bodyData)

  }
}

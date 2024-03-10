import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  base_url='https://umsserver-5904.onrender.com'

  constructor(private http:HttpClient) { }
  loginApi(){
  return  this.http.get(`${this.base_url}/admin`)
  }

  // update admin
  updateAdmin(bodyData:any){
    return this.http.put(`${this.base_url}/admin/1`,bodyData)
  }
}

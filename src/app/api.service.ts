import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  constructor(private http:HttpClient) { }
 
  fetchData(id: any) {
    return this.http.get(`http://localhost:3000/posts/${id}`);
  }

  postData(data: any) {
    return this.http.post('http://localhost:3000/posts/', data);
  }

  // updateEmployee(id: any, data: any) {
  //   return this.http.put(`http://localhost:3000/post/${id}`, data);
  // }

  // deleteEmployee(id: any) {
  //   return this.http.delete(`http://localhost:3000/post/${id}`);
  // }

}



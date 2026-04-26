import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private apiUrl = 'https://api.escuelajs.co/api/v1/products';

  constructor(private http: HttpClient) {}

  // ✅ GET
  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // ✅ GET by ID
  getUser(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // ✅ POST
  addUser(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  // ✅ PUT
  updateUser(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  // ✅ DELETE
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
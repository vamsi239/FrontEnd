import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Aboutservice {
  private api = 'https://api.escuelajs.co/api/v1/products';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>(this.api);
  }

  add(data: any) {
    return this.http.post(this.api, data);
  }

  update(id: number, data: any) {
    return this.http.put(`${this.api}/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }
}

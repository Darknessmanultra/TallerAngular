import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:5262/api/products';
  constructor(private http: HttpClient) { }
  getProducts(search = '',page=1,pageSize=10): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}?search=${search}`);
}
}

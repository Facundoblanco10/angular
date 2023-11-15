import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private http = inject(HttpClient);

  constructor(
  ) { }

  getAllProducts(){
    return this.http.get<Product[]>('http://fakestoreapi.com/products');
  }
}

import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  products = signal<Product[]>([]);

  constructor() {
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Producto 1',
        price: 1000,
        image: "https://picsum.photos/600?r=23 ",
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Producto 2',
        price: 120,
        image: "https://picsum.photos/600?r=26 ",
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Producto 3',
        price: 400,
        image: "https://picsum.photos/600?r=33 ",
        creationAt: new Date().toISOString()
      },
    ]
    this.products.set(initProducts);
  }

  fromChild(event: string) {
    console.log('estamos en el padre');
    console.log(event);
  }
}

import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Product } from '../../models/product.model';
import { BehaviorSubject, Observable } from 'rxjs';

export class DataSourceProduct extends DataSource<Product> {
  data = new BehaviorSubject<Product[]>([]);

  connect(): Observable<Product[]> {
    return this.data;
  }

  init(products: Product[]) {
    this.data.next(products);
  }

  getTotalPrice(): number {
    const products = this.data.getValue();
    return products.map((product) => product.price).reduce((a, b) => a + b, 0);
  }

  update(id: Product['id'], changes: Partial<Product>) {
    const products = this.data.getValue();
    const productIndex = products.findIndex((product) => product.id === id);
    if (productIndex !== -1) {
      products[productIndex] = { ...products[productIndex], ...changes };
    }
    this.data.next(products);
  }

  disconnect(): void {}
}

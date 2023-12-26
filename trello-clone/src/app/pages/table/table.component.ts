import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import { CdkTableModule } from '@angular/cdk/table';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NavbarComponent, CdkTableModule],
  templateUrl: './table.component.html',
})
export class TableComponent {
  private http = inject(HttpClient);

  products: Product[] = [];
  columns: string[] = ['Number', 'Name', 'price', 'cover'];

  ngOnInit() {
    this.http
      .get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        this.products = data;
      });
  }
}

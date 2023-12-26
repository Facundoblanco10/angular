import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import { CdkTableModule } from '@angular/cdk/table';
import { Product } from '../../models/product.model';
import { NgClass } from '@angular/common';
import { DataSourceProduct } from './data-source';
import { BtnComponent } from '../../components/btn/btn.component';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    NavbarComponent,
    CdkTableModule,
    NgClass,
    BtnComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './table.component.html',
})
export class TableComponent {
  private http = inject(HttpClient);

  dataSource = new DataSourceProduct();
  columns: string[] = ['Number', 'Name', 'price', 'cover', 'actions'];
  totalPrice: number = 0;
  input = new FormControl('', { nonNullable: true });

  ngOnInit() {
    this.http
      .get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        this.dataSource.init(data);
        this.totalPrice = this.dataSource.getTotalPrice();
      });

    this.input.valueChanges
    .pipe(
      debounceTime(500)
    )
    .subscribe((value) => {
      this.dataSource.find(value);
    });
  }

  update(product: Product) {
    this.dataSource.update(product.id, { price: 1000 });
  }
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ImgComponent } from '../img/img.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ImgComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product: Product = {
    id: '',
    name: '',
    image: '',
    price: 0
  }
}

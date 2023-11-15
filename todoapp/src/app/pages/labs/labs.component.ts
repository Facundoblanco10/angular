import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css',
})
export class LabsComponent {
  welcome: string = 'Welcome to Angular 17';
  tasks: string[] = [
    'Instalar Angular CLI',
    'Crear proyecto',
    'Crear componentes',
  ];
  name: string = 'Bocha';
  age: number = 21;
  disabled: boolean = true;
  img: string = 'https://picsum.photos/200';
}

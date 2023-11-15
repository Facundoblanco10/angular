import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  welcome: string = 'Welcome to Angular 17';
  tasks: string[] = [
    'Instalar Angular CLI',
    'Crear proyecto',
    'Crear componentes',
  ];
}

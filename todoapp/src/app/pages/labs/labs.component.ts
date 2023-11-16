import { Component, WritableSignal, signal } from '@angular/core';
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
  name: WritableSignal<string> = signal('Bocha');
  age: number = 21;
  disabled: boolean = true;
  img: string = 'https://picsum.photos/200';

  person = {
    name: 'Bocha',
    age: 21,
    avatar: 'https://picsum.photos/200',
  };

  clickHandler() {
    console.log('clickHandler');
  }

  dblClickHandler() {
    console.log('dblClickHandler');
  }

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
    console.log(this.name());
  }

  keydownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
  keydownHandlerShift(){
    console.log('keydownHandlerShift');
  }
}

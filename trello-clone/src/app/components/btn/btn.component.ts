import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [NgClass],
  templateUrl: './btn.component.html',
})
export class BtnComponent {
  @Input() typeBtn: 'button' | 'submit' | 'reset' = 'button';
  @Input() color: 'primary' | 'success' = 'primary';

  mapColors = {
    primary: {
      'bg-primary-700': true,
      'hover:bg-primary-800': true,
      'focus:primary-300': true,
      'text-white': true,
    },
    success: {
      'bg-success-700': true,
      'hover:bg-success-800': true,
      'focus:ring-success-300': true,
      'text-white': true,
    },
    danger: {
      'bg-danger-700': true,
      'hover:bg-danger-800': true,
      'focus:ring-danger-300': true,
      'text-white': true,
    },
    sky: {
      'bg-sky-700': true,
      'hover:bg-sky-800': true,
      'focus:ring-sky-300': true,
      'text-white': true,
    },
  }

  get colors() {
    const colors = this.mapColors[this.color];
    if (colors) {
      return colors;
    }
    return {};
  }
}

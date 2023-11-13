import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-img',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './img.component.html',
  styleUrl: './img.component.scss'
})
export class ImgComponent {
  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = 'https://cataas.com/cat'

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded(){
    console.log('log hijo')
    this.loaded.emit(this.img);
  }
}

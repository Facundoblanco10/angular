import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  AfterViewInit,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-img',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './img.component.html',
  styleUrl: './img.component.scss',
})
export class ImgComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
  img: string = '';

  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('change just image =>', this.img)
  }
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = 'https://cataas.com/cat';
  counter: number = 0;
  counterFunc: number | undefined;

  constructor() {
    // before render
    // NO async -- once time
    console.log('constructor', 'imgValue =>', this.img);
  }

  ngOnChanges(changes: SimpleChanges) {
    // before render
    // change inputs -- x times
    console.log('ngOnChanges', 'imgValue =>', this.img);
    console.log('changes', changes);
  }

  ngOnInit(): void {
    // before render
    // async -- once time
    console.log('ngOnInit', 'imgValue =>', this.img);
    // this.counterFunc = window.setInterval(() => {
    //   this.counter++;
    //   console.log('counter', this.counter);
    // }, 1000);
  }

  ngAfterViewInit(): void {
    // after render
    // handler children -- once time
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    // delete -- once time
    console.log('ngOnDestroy');
    window.clearInterval(this.counterFunc);
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('log hijo');
    this.loaded.emit(this.img);
  }
}

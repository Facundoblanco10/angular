import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = '';

  constructor() {
    // No async
    // one time
    console.log('constructor');
    console.log('-'.repeat(20));
  }

  ngOnChanges(changes: SimpleChanges) {
    // before and during render
    console.log('ngOnChanges');
    console.log('-'.repeat(20));
    console.log(changes);
  }

  ngOnInit() {
    // before render
    // one time
    // async
    console.log('ngOnInit');
    console.log('-'.repeat(20));
    console.log("duration -> ", this.duration);
    console.log("message -> ", this.message);
  }

  ngAfterViewInit() {
    // after render
    // children has been rendered
    console.log('ngAfterViewInit');
    console.log('-'.repeat(20));
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    console.log('-'.repeat(20));
  }
}

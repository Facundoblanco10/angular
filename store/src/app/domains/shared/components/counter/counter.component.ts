import { Component, Input, SimpleChanges, signal } from '@angular/core';
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
  counter = signal(0);
  counterRef: number | undefined;

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
    const duration = changes['duration'];
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }
  }

  ngOnInit() {
    // before render
    // one time
    // async
    console.log('ngOnInit');
    console.log('-'.repeat(20));
    console.log('duration -> ', this.duration);
    console.log('message -> ', this.message);
    this.counterRef = window.setInterval(() => {
      console.log('run interval')
      this.counter.update((statePrev) => statePrev + 1);
    }, 1000);
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
    window.clearInterval(this.counterRef);
  }

  doSomething() {
    console.log('change duration');
    // async or not async
  }
}

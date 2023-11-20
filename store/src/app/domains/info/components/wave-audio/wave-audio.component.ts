import { Component, ElementRef, Input, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.css'
})
export class WaveAudioComponent {

  @Input({
    required: true,
  }) audioUrl!: string;
  @ViewChild('wave') container!: ElementRef;
  private waveSurfer!: WaveSurfer;
  isPlaying = signal(false);

  ngAfterViewInit() {
    this.waveSurfer = WaveSurfer.create({
      url: this.audioUrl,
      container: this.container.nativeElement,
    })
    this.waveSurfer.on('play', () => this.isPlaying.set(true));
    this.waveSurfer.on('pause', () => this.isPlaying.set(false));
  }

  playPause() {
    this.waveSurfer.playPause();
  }
}

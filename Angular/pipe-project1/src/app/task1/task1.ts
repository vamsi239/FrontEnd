import { Component } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-task1',
  standalone:true,
  imports: [Child],
  templateUrl: './task1.html',
  styleUrl: './task1.css',
})
export class Task1 {
   // 🎧 Audio
  audioList: string[] = [
    'audio1.mp3',
    'assets/audio2.mp3',
    'assets/audio3.mp3'
  ];
  currentIndex: number = 0;

  nextSong() {
    this.currentIndex = (this.currentIndex + 1) % this.audioList.length;
  }

  prevSong() {
    this.currentIndex =
      (this.currentIndex - 1 + this.audioList.length) % this.audioList.length;
  }

  counter: number = 0;

  updateCounter(value: number) {
    this.counter = value;
  }
}

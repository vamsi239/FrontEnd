import { Component ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Input() audioSrc!: string;
  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();

  isPlaying: boolean = false;

  togglePlay(audio: HTMLAudioElement) {
    if (this.isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  @Input() count!: number;
  @Output() countChange = new EventEmitter<number>();

  increment() {
    this.countChange.emit(this.count + 1);
  }

  decrement() {
    this.countChange.emit(this.count - 1);
  }
}

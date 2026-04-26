import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-feedback',
  imports: [],
  templateUrl: './feedback.html',
  styleUrl: './feedback.css',
})
export class Feedback {
  route=inject(Router);

  clickBTN(){
    this.route.navigate(['about']);
  }
}

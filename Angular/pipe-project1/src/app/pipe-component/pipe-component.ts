import { CurrencyPipe, JsonPipe, SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ReversePipePipe } from '../customPipe/reverse-pipe-pipe';

@Component({
  selector: 'app-pipe-component',
  imports: [SlicePipe,CurrencyPipe,JsonPipe,ReversePipePipe],
  templateUrl: './pipe-component.html',
  styleUrl: './pipe-component.css',
})
export class PipeComponent {
  UserData = [
  {
    name: "Ajay",
    age: 22,
    salary: 25000,
    city: "Hyderabad"
  },
  {
    name: "Ravi",
    age: 25,
    salary: 30000,
    city: "Bangalore"
  },
];
}
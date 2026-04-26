import { Component } from '@angular/core';
import { Child1 } from './../child1/child1';
import { Datashare } from '../service/datashare';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [Child1],
  templateUrl: './parent.html'
})
export class ParentComponent {

  userName = "Vamsi";
  userEmail = "vamsi@gmail.com";

  constructor(public data: Datashare) {
    console.log(this.data.getMsg());       
    console.log(this.data.datashare);       
  }
}
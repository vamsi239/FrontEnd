import { Component, Input, inject } from '@angular/core';
import { Datashare } from '../service/datashare';

@Component({
  selector: 'app-child',
  standalone: true,
  templateUrl: './child1.html'
})
export class Child1 {

  
  data = inject(Datashare);

  @Input() name: string = '';
  @Input() email: string = '';
  @Input() pdata: string = '';

  change: string = "changeDone";

  ngOnInit() {
    console.log("method works only once");

    console.log(this.data.getMsg());      
    console.log(this.data.datashare);    
  }

  ngOnChanges() {
    console.log("Parent data changed:", this.name);
  }
}
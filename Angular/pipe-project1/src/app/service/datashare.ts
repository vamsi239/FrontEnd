import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Datashare {
  getMsg(){
    return "hello service;"
  }

  datashare:string='hello inject method';
}

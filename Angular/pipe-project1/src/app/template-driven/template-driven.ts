import { Component } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';
import { ReactiveForm } from '../reactive-form/reactive-form';

interface User{
  countryName:string,
  countryCode:number
}
@Component({
  selector: 'app-template-driven',
  imports: [FormsModule],
  templateUrl: './template-driven.html',
  styleUrl: './template-driven.css',
})
export class TemplateDriven {
    handelForm(formRef: NgForm) {
    console.log(formRef.value); // important
    console.log(formRef);
  }
  country:User[]=[
    {
      countryName:"ind",countryCode:91
    },
    {
      countryName:"aus",countryCode:1
    },
    {
      countryName:"abc",countryCode:11
    },
    {
      countryName:"xyz",countryCode:12
    },
    {
      countryName:"sk",countryCode:3
    },
    {
      countryName:"uk",countryCode:4
    },
  ]

  skill:string[] =[]
 handelCheck(value: HTMLInputElement) {

  if (value.checked) {
    this.skill.push(value.value);
  } else {
    this.skill = this.skill.filter((ele) => {
      return ele !== value.value;
    });
  }

  console.log(this.skill);
}
}

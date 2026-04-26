import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';
import { UserNameValidator } from '../customValidator';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrls: ['./reactive-form.css']
})
export class ReactiveForm {

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), UserNameValidator]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*?&]).{8,}$')
    ]),
    gender: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),

    skills: new FormArray([])
  });

  
  get skills() {
    return this.form.get('skills') as FormArray;
  }

  
  onSkillChange(event: any) {
    const value = event.target.value;

    if (event.target.checked) {
      this.skills.push(new FormControl(value));  
    } else {
      const index = this.skills.controls.findIndex(x => x.value === value);
      this.skills.removeAt(index);               
    }
  }

  handelForm() {
    console.log(this.form.value);  
   
  }
}
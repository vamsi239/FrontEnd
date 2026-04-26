import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PipeComponent } from './pipe-component/pipe-component';
import { TemplateDriven } from './template-driven/template-driven';
import { LoginComponent } from './login-form/login-form';
import { ReactiveForm } from './reactive-form/reactive-form';
import { Task1 } from './task1/task1';
import { ParentComponent } from './parent/parent';
import { RegistrationComponent } from './registration/registration';

@Component({
  selector: 'app-root',
  imports: [RegistrationComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pipe-project1');
}

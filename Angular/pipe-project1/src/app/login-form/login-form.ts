import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-form.html',
  styleUrls: ['./login-form.css']
})
export class LoginComponent {

  
  handleLogin(form: NgForm) {
    if (form.valid) {
      console.log("Form Data:", form.value);

      
      const { username, email, password } = form.value;

      console.log("Username:", username);
      console.log("Email:", email);
      console.log("Password:", password);

      

    } else {
      console.log("Form is invalid");
    }
  }

}
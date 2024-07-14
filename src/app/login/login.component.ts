import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onSubmit(): void {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // Aquí puedes añadir la lógica para autenticar al usuario

  }
}

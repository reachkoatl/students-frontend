import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersServiceClientService } from '../users-service-client.service';
import { Router } from '@angular/router';  // Importa el Router para la navegación

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private userService: UsersServiceClientService, private router: Router) {}

  onSubmit(): void {
    this.userService.login(this.username, this.password).subscribe(
      response => {
        if (response.token) {  // Supone que el backend devuelve un token en caso de éxito
          console.log('Login successful');
          // Guardar el token en el almacenamiento local o en el almacenamiento de la sesión
          localStorage.setItem('authToken', response.token);
          // Redirigir a la página principal o al dashboard
          this.router.navigate(['/students']);
        } else {
          console.log('Login failed');
          alert("error en la obtencio de token");
          // Mostrar un mensaje de error
        }
      },
      error => {
        alert("login error");
        console.error('Login error:', error);
        // Mostrar un mensaje de error
      }
    );
  }
}

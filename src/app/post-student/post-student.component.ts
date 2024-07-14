import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { User } from '../models/User';
import { UsersServiceClientService } from '../users-service-client.service';

@Component({
  selector: 'app-post-student',
  templateUrl: './post-student.component.html',
  styleUrl: './post-student.component.css'
})
export class PostStudentComponent {
  studentForm: FormGroup;

  constructor(private userService: UsersServiceClientService,private fb: FormBuilder, private location: Location) {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  onClear(): void {
    this.studentForm.reset();
  }

  onSubmit(): void {
    if (this.studentForm.valid) {
      // Destructura el objeto para excluir _id y fechaDeCreacion, y captura el resto de propiedades en newUser
      const { _id, fechaDeCreacion, ...newUser } = this.studentForm.value;

      // Ahora newUser no incluye los campos _id ni fechaDeCreacion
      this.userService.addUser(newUser).subscribe({
        next: (user) => console.log('Usuario agregado:', user),
        error: (error) => console.error('Error al agregar usuario, podrían haber datos duplicados:', error)
      });
    }
  }

  goBack(): void {
    this.location.back();
  }
}

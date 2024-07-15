import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { UsersServiceClientService } from '../users-service-client.service';

@Component({
  selector: 'app-put-student',
  templateUrl: './put-student.component.html',
  styleUrl: './put-student.component.css'
})
export class PutStudentComponent {
  studentForm: FormGroup;
  originalData: any;

  constructor(private fb: FormBuilder, private location: Location,private userService: UsersServiceClientService) {
    this.studentForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      nameUser: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
      role: ['', Validators.required]
    });

    this.originalData = {
      nameUser: 'Juan',
    age: 25,
    email: 'juan@example.com',
    lastName: 'Perez', // Añadir este campo
    username: 'juan123', // Añadir este campo
    phone: '123456789',
    role: 1, // Añadir este campo
    password: 123456
    };
  }

  ngOnInit(): void {
    this.studentForm.setValue(this.originalData);
  }

  onRestore(): void {
    this.studentForm.setValue(this.originalData);
  }

  onSubmit(): void {
    if (this.studentForm.valid) {
      console.log('Student data:', this.studentForm.value);
      // Aquí puedes agregar la lógica para enviar los datos del formulario
    }
  }

  goBack(): void {
    this.location.back();
  }


  updateStudent(): void {
    if (this.studentForm.valid) {
      const studentData = this.studentForm.value;
      const studentId = this.originalData.id; // Asegúrate de tener un ID para actualizar
      this.userService.actualizarUsuario(studentId, studentData).subscribe({
        next: (response) => {
          console.log('Estudiante actualizado con éxito', response);
          // Opcional: Redirigir o mostrar un mensaje de éxito
        },
        error: (error) => {
          console.error('Error al actualizar el estudiante', error);
          // Opcional: Manejar errores, mostrar mensajes de error
        }
      });
    }
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { UsersServiceClientService } from '../users-service-client.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-put-student',
  templateUrl: './put-student.component.html',
  styleUrl: './put-student.component.css'
})
export class PutStudentComponent {
  studentForm: FormGroup;
  originalData: any;

  constructor(private fb: FormBuilder,private route: ActivatedRoute, private location: Location,private userService: UsersServiceClientService) {
    this.studentForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      //password: ['', Validators.required],
      nameUser: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
      role: ['', Validators.required]
    });

    /*this.originalData = {
      nameUser: 'Juan',
    age: 25,
    email: 'juan@example.com',
    lastName: 'Perez', // Añadir este campo
    username: 'juan123', // Añadir este campo
    phone: '123456789',
    role: 1, // Añadir este campo
    password: 123456
    };*/
  }

  ngOnInit(): void {
    //this.studentForm.setValue(this.originalData);

    const studentData = localStorage.getItem('selectedStudent');

    if (studentData) {
      this.originalData = JSON.parse(studentData);
      this.studentForm.setValue({
        username: this.originalData.username,
        email: this.originalData.email,
        //password: this.originalData.password,
        nameUser: this.originalData.nameUser,
        lastName: this.originalData.lastName,
        phone: this.originalData.phone,
        age: this.originalData.age,
        role: this.originalData.role
      });
    }
    console.log(studentData);
  }
/*
  onRestore(): void {
    this.studentForm.setValue(this.originalData);
  }*/

  onSubmit(): void {
    if (this.studentForm.valid) {
      //console.log('Student data:', this.studentForm.value);
      // Aquí puedes agregar la lógica para enviar los datos del formulario

      const studentData = this.studentForm.value;
      const studentId = this.originalData._id; // Asegúrate de tener un ID para actualizar
      console.log(studentData);
      console.log(studentId);
      this.userService.actualizarUsuario(studentId, studentData).subscribe({
        next: (response) => {
          console.log('Estudiante actualizado con éxito', response);
          // Opcional: Redirigir o mostrar un mensaje de éxito
          console.log("usuario actualizado correctamente");
          this.location.back();
        },
        error: (error) => {
          console.error('Error al actualizar el estudiante', error);
          alert("ocurrio un erro en la actualizacion, recuerda que no pueden haber correos o usuarios duplicados");
          // Opcional: Manejar errores, mostrar mensajes de error
        }
      });
    }
  }

  goBack(): void {
    this.location.back();
  }

/*
  updateStudent(): void {
    if (this.studentForm.valid) {

      const studentData = this.studentForm.value;
      const studentId = this.originalData.id; // Asegúrate de tener un ID para actualizar
      console.log("hola1");
      this.userService.actualizarUsuario(studentId, studentData).subscribe({
        next: (response) => {
          console.log('Estudiante actualizado con éxito', response);
          // Opcional: Redirigir o mostrar un mensaje de éxito
          console.log("usuario actualizado correctamente");
          this.location.back();
        },
        error: (error) => {
          console.error('Error al actualizar el estudiante', error);
          alert("ocurrio un erro en la actualizacion, recuerda que no pueden haber correos o usuarios duplicados");
          // Opcional: Manejar errores, mostrar mensajes de error
        }
      });
    }
  }*/
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-put-student',
  templateUrl: './put-student.component.html',
  styleUrl: './put-student.component.css'
})
export class PutStudentComponent {
  studentForm: FormGroup;
  originalData: any;

  constructor(private fb: FormBuilder, private location: Location) {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required]
    });

    this.originalData = {
      name: 'Juan',
      age: 25,
      email: 'juan@example.com',
      phone: '123456789',
      address: 'Calle Falsa 123'
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
}

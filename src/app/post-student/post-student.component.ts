import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post-student',
  templateUrl: './post-student.component.html',
  styleUrl: './post-student.component.css'
})
export class PostStudentComponent {
  studentForm: FormGroup;

  constructor(private fb: FormBuilder, private location: Location) {
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
      console.log('Student data:', this.studentForm.value);
      // Aquí puedes agregar la lógica para enviar los datos del formulario
    }
  }

  goBack(): void {
    this.location.back();
  }
}

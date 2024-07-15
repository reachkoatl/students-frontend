import { Component } from '@angular/core';
import { UsersServiceClientService } from '../users-service-client.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-get-student',
  templateUrl: './get-student.component.html',
  styleUrl: './get-student.component.css'
})
export class GetStudentComponent {

  students: any[] = [];
  selectedStudent: any = null;

  constructor(private userService: UsersServiceClientService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(): void {
    this.userService.obtenerUsuarios().subscribe(
      data => {
        this.students = data;
        console.log('Students:', this.students);
      },
      error => {
        console.error('Error fetching students:', error);
      }
    );
  }

  seleccionarEstudiante(student: any): void {
    this.selectedStudent = student;
    console.log(this.selectedStudent);
  }

  navigateToPostStudent(): void {
    this.router.navigate(['/add']);
  }

  navigateToPutStudent(): void {
    //this.router.navigate(['/modify']);

    if (this.selectedStudent) {
      localStorage.setItem('selectedStudent', JSON.stringify(this.selectedStudent));
      this.router.navigate(['/modify']/*, { state: { student: this.selectedStudent } }*/);
    } else {
      alert('Por favor, selecciona un estudiante.');
    }
  }

  // Eliminar un usuario por ID
  deleteStudent(): void {
    console.log(this.selectedStudent);
    console.log(this.selectedStudent._id);

    if (this.selectedStudent) {
      localStorage.setItem('selectedStudent', JSON.stringify(this.selectedStudent));

      this.userService.eliminarUsuario(this.selectedStudent._id).subscribe(
        data => {
          //this.students = data;

          this.obtenerUsuarios();
        },
        error => {
          console.error('Error eliminando students:', error);
        }
      );

    } else {
      alert('Por favor, selecciona un estudiante.');
    }


  }

  /*
  eliminarUsuario(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }*/

}

import { Component } from '@angular/core';
import { UsersServiceClientService } from '../users-service-client.service';

@Component({
  selector: 'app-get-student',
  templateUrl: './get-student.component.html',
  styleUrl: './get-student.component.css'
})
export class GetStudentComponent {

  students: any[] = [];

  constructor(private userService: UsersServiceClientService) {}

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

}

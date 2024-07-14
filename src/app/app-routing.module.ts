import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GetStudentComponent } from './get-student/get-student.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'students', component: GetStudentComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // Otras rutas pueden ir aquí
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

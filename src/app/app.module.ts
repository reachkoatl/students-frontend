import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { GetStudentComponent } from './get-student/get-student.component';
import { PostStudentComponent } from './post-student/post-student.component';
import { PutStudentComponent } from './put-student/put-student.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GetStudentComponent,
    PostStudentComponent,
    PutStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

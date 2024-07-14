import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostStudentComponent } from './post-student.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Location } from '@angular/common';
import { UsersServiceClientService } from '../users-service-client.service';
import { of } from 'rxjs';
import { User } from '../models/User';

describe('PostStudentComponent', () => {
  let component: PostStudentComponent;
  let fixture: ComponentFixture<PostStudentComponent>;
  let userService: UsersServiceClientService;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostStudentComponent ],
      imports: [ ReactiveFormsModule, HttpClientTestingModule ],
      providers: [ UsersServiceClientService, Location ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostStudentComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UsersServiceClientService);
    location = TestBed.inject(Location);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.studentForm.valid).toBeFalsy();
  });

  it('submitting a valid form calls userService.addUser', () => {
    const user: User = {
      _id: '1',
      age: 25,
      email: 'test@example.com',
      fechaDeCreacion: new Date().toISOString(),
      lastName: 'Last Name',
      nameUser: 'User Name',
      phone: '1234567890',
      role:2,
      username:"rockdrigo"
    };

    spyOn(userService, 'addUser').and.returnValue(of(user));
    component.studentForm.controls['name'].setValue("Test Name");
    component.studentForm.controls['age'].setValue(25);
    component.studentForm.controls['email'].setValue("test@example.com");
    component.studentForm.controls['phone'].setValue("1234567890");
    component.studentForm.controls['address'].setValue("Test Address");
    component.onSubmit();
    expect(userService.addUser).toHaveBeenCalled();
  });

  it('onClear resets the form', () => {
    component.studentForm.controls['name'].setValue("Test Name");
    component.onClear();
    expect(component.studentForm.controls['name'].value).toEqual('');
  });

  it('goBack calls location.back', () => {
    spyOn(location, 'back');
    component.goBack();
    expect(location.back).toHaveBeenCalled();
  });
});

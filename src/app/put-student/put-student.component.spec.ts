import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutStudentComponent } from './put-student.component';

describe('PutStudentComponent', () => {
  let component: PutStudentComponent;
  let fixture: ComponentFixture<PutStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PutStudentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

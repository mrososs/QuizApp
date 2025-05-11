import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top5StudentsComponent } from './top-5-students.component';

describe('Top5StudentsComponent', () => {
  let component: Top5StudentsComponent;
  let fixture: ComponentFixture<Top5StudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Top5StudentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Top5StudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

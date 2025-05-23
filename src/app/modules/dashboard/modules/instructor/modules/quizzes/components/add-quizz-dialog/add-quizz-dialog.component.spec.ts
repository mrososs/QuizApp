import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuizzDialogComponent } from './add-quizz-dialog.component';

describe('AddQuizzDialogComponent', () => {
  let component: AddQuizzDialogComponent;
  let fixture: ComponentFixture<AddQuizzDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddQuizzDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddQuizzDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

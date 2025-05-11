import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Upcoming5QuizzesComponent } from './upcoming-5-quizzes.component';

describe('Upcoming5QuizzesComponent', () => {
  let component: Upcoming5QuizzesComponent;
  let fixture: ComponentFixture<Upcoming5QuizzesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Upcoming5QuizzesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Upcoming5QuizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

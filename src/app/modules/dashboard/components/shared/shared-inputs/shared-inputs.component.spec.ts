import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedInputsComponent } from './shared-inputs.component';

describe('SharedInputsComponent', () => {
  let component: SharedInputsComponent;
  let fixture: ComponentFixture<SharedInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedInputsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

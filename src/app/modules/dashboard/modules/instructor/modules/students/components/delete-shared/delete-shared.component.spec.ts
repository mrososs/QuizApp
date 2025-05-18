import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSharedComponent } from './delete-shared.component';

describe('DeleteSharedComponent', () => {
  let component: DeleteSharedComponent;
  let fixture: ComponentFixture<DeleteSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteSharedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

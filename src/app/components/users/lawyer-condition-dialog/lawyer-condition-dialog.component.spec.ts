import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerConditionDialogComponent } from './lawyer-condition-dialog.component';

describe('LawyerConditionDialogComponent', () => {
  let component: LawyerConditionDialogComponent;
  let fixture: ComponentFixture<LawyerConditionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawyerConditionDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyerConditionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

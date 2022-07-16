import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptRequestDialogComponent } from './accept-request-dialog.component';

describe('AcceptRequestDialogComponent', () => {
  let component: AcceptRequestDialogComponent;
  let fixture: ComponentFixture<AcceptRequestDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptRequestDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptRequestDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

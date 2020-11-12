import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDriverDialogComponent } from './edit-driver-dialog.component';

describe('EditDriverDialogComponent', () => {
  let component: EditDriverDialogComponent;
  let fixture: ComponentFixture<EditDriverDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDriverDialogComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDriverDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

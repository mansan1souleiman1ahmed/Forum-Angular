import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfricaModalComponent } from './africa-modal.component';

describe('AfricaModalComponent', () => {
  let component: AfricaModalComponent;
  let fixture: ComponentFixture<AfricaModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfricaModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfricaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

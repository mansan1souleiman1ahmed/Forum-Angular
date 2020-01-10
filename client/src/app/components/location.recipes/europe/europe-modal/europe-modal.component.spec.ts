import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuropeModalComponent } from './europe-modal.component';

describe('EuropeModalComponent', () => {
  let component: EuropeModalComponent;
  let fixture: ComponentFixture<EuropeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuropeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuropeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

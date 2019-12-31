import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EastAsiaComponent } from './east-asia.component';

describe('EastAsiaComponent', () => {
  let component: EastAsiaComponent;
  let fixture: ComponentFixture<EastAsiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EastAsiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EastAsiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

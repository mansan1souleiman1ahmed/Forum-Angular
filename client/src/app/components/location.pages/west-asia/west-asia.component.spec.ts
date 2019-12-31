import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WestAsiaComponent } from './west-asia.component';

describe('WestAsiaComponent', () => {
  let component: WestAsiaComponent;
  let fixture: ComponentFixture<WestAsiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WestAsiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WestAsiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

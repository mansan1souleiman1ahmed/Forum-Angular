import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthAmericaComponent } from './south-america.component';

describe('SouthAmericaComponent', () => {
  let component: SouthAmericaComponent;
  let fixture: ComponentFixture<SouthAmericaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SouthAmericaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SouthAmericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

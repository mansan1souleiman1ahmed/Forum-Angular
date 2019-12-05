import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInputRegisterComponent } from './user-input-register.component';

describe('UserInputRegisterComponent', () => {
  let component: UserInputRegisterComponent;
  let fixture: ComponentFixture<UserInputRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInputRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInputRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

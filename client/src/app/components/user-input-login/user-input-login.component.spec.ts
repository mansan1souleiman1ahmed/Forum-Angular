import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInputLoginComponent } from './user-input-login.component';

describe('UserInputLoginComponent', () => {
  let component: UserInputLoginComponent;
  let fixture: ComponentFixture<UserInputLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInputLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInputLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

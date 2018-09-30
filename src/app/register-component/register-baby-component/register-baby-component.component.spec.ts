import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBabyComponentComponent } from './register-baby-component.component';

describe('RegisterBabyComponentComponent', () => {
  let component: RegisterBabyComponentComponent;
  let fixture: ComponentFixture<RegisterBabyComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterBabyComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterBabyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

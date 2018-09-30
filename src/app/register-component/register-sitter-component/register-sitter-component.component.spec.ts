import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSitterComponentComponent } from './register-sitter-component.component';

describe('RegisterSitterComponentComponent', () => {
  let component: RegisterSitterComponentComponent;
  let fixture: ComponentFixture<RegisterSitterComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSitterComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSitterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

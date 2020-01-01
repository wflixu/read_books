import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignPageComponent } from './sign-page.component';

describe('SignPageComponent', () => {
  let component: SignPageComponent;
  let fixture: ComponentFixture<SignPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HecksComponent } from './hecks.component';

describe('HecksComponent', () => {
  let component: HecksComponent;
  let fixture: ComponentFixture<HecksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HecksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

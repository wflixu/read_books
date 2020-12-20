import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HecksEditComponent } from './hecks-edit.component';

describe('HecksEditComponent', () => {
  let component: HecksEditComponent;
  let fixture: ComponentFixture<HecksEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HecksEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HecksEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinhComponent } from './vinh.component';

describe('VinhComponent', () => {
  let component: VinhComponent;
  let fixture: ComponentFixture<VinhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

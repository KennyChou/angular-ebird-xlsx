import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EBird2ExcelComponent } from './e-bird2-excel.component';

describe('EBird2ExcelComponent', () => {
  let component: EBird2ExcelComponent;
  let fixture: ComponentFixture<EBird2ExcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EBird2ExcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EBird2ExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

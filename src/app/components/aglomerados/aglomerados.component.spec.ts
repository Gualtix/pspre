import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AglomeradosComponent } from './aglomerados.component';

describe('AglomeradosComponent', () => {
  let component: AglomeradosComponent;
  let fixture: ComponentFixture<AglomeradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AglomeradosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AglomeradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

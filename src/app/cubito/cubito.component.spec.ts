import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubitoComponent } from './cubito.component';

describe('CubitoComponent', () => {
  let component: CubitoComponent;
  let fixture: ComponentFixture<CubitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CubitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CubitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

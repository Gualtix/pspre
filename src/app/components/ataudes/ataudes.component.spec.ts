import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtaudesComponent } from './ataudes.component';

describe('AtaudesComponent', () => {
  let component: AtaudesComponent;
  let fixture: ComponentFixture<AtaudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtaudesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtaudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotopComponent } from './totop.component';

describe('TotopComponent', () => {
  let component: TotopComponent;
  let fixture: ComponentFixture<TotopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

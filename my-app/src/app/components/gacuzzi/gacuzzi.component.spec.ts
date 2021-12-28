import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GacuzziComponent } from './gacuzzi.component';

describe('GacuzziComponent', () => {
  let component: GacuzziComponent;
  let fixture: ComponentFixture<GacuzziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GacuzziComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GacuzziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

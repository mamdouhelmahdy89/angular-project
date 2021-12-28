import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SounaComponent } from './souna.component';

describe('SounaComponent', () => {
  let component: SounaComponent;
  let fixture: ComponentFixture<SounaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SounaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SounaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

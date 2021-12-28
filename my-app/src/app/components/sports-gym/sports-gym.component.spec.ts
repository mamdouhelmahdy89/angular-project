import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsGymComponent } from './sports-gym.component';

describe('SportsGymComponent', () => {
  let component: SportsGymComponent;
  let fixture: ComponentFixture<SportsGymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsGymComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsGymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

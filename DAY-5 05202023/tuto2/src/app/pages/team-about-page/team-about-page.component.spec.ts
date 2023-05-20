import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAboutPageComponent } from './team-about-page.component';

describe('TeamAboutPageComponent', () => {
  let component: TeamAboutPageComponent;
  let fixture: ComponentFixture<TeamAboutPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamAboutPageComponent]
    });
    fixture = TestBed.createComponent(TeamAboutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HitoricAboutPageComponent } from './hitoric-about-page.component';

describe('HitoricAboutPageComponent', () => {
  let component: HitoricAboutPageComponent;
  let fixture: ComponentFixture<HitoricAboutPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HitoricAboutPageComponent]
    });
    fixture = TestBed.createComponent(HitoricAboutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

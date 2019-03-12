import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwirlhomeComponent } from './twirlhome.component';

describe('TwirlhomeComponent', () => {
  let component: TwirlhomeComponent;
  let fixture: ComponentFixture<TwirlhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwirlhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwirlhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

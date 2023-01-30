import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionContainerComponent } from './submission-container.component';

describe('SubmissionContainerComponent', () => {
  let component: SubmissionContainerComponent;
  let fixture: ComponentFixture<SubmissionContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

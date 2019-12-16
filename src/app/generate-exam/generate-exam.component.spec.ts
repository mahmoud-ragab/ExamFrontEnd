import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateExamComponent } from './generate-exam.component';

describe('GenerateExamComponent', () => {
  let component: GenerateExamComponent;
  let fixture: ComponentFixture<GenerateExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

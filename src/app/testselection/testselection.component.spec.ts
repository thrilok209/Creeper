import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestselectionComponent } from './testselection.component';

describe('TestselectionComponent', () => {
  let component: TestselectionComponent;
  let fixture: ComponentFixture<TestselectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestselectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

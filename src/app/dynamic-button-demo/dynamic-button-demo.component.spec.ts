import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicButtonDemoComponent } from './dynamic-button-demo.component';

describe('DynamicButtonDemoComponent', () => {
  let component: DynamicButtonDemoComponent;
  let fixture: ComponentFixture<DynamicButtonDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicButtonDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicButtonDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

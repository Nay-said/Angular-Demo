import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TxtUploadComponent } from './txt-upload.component';

describe('TxtUploadComponent', () => {
  let component: TxtUploadComponent;
  let fixture: ComponentFixture<TxtUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TxtUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TxtUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

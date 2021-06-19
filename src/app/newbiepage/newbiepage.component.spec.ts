import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbiepageComponent } from './newbiepage.component';

describe('NewbiepageComponent', () => {
  let component: NewbiepageComponent;
  let fixture: ComponentFixture<NewbiepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewbiepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewbiepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

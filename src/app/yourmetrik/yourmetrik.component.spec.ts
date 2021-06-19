import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourmetrikComponent } from './yourmetrik.component';

describe('YourmetrikComponent', () => {
  let component: YourmetrikComponent;
  let fixture: ComponentFixture<YourmetrikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourmetrikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourmetrikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

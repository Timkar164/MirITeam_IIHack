import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GingerbreadComponent } from './gingerbread.component';

describe('GingerbreadComponent', () => {
  let component: GingerbreadComponent;
  let fixture: ComponentFixture<GingerbreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GingerbreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GingerbreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandmetrikComponent } from './commandmetrik.component';

describe('CommandmetrikComponent', () => {
  let component: CommandmetrikComponent;
  let fixture: ComponentFixture<CommandmetrikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandmetrikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandmetrikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

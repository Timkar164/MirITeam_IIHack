import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilleComponent } from './profille.component';

describe('ProfilleComponent', () => {
  let component: ProfilleComponent;
  let fixture: ComponentFixture<ProfilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

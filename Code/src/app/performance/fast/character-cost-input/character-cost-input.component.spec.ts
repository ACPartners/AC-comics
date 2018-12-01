import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCostInputComponent } from './character-cost-input.component';

describe('CharacterCostInputComponent', () => {
  let component: CharacterCostInputComponent;
  let fixture: ComponentFixture<CharacterCostInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterCostInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCostInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

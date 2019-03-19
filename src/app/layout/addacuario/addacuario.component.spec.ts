import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddacuarioComponent } from './addacuario.component';

describe('AddacuarioComponent', () => {
  let component: AddacuarioComponent;
  let fixture: ComponentFixture<AddacuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddacuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddacuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

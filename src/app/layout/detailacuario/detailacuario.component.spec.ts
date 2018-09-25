import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailacuarioComponent } from './detailacuario.component';

describe('DetailacuarioComponent', () => {
  let component: DetailacuarioComponent;
  let fixture: ComponentFixture<DetailacuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailacuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailacuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

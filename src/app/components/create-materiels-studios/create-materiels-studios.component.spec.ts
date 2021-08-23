import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMaterielsStudiosComponent } from './create-materiels-studios.component';

describe('CreateMaterielsStudiosComponent', () => {
  let component: CreateMaterielsStudiosComponent;
  let fixture: ComponentFixture<CreateMaterielsStudiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMaterielsStudiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMaterielsStudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

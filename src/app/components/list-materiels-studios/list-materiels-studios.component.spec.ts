import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMaterielsStudiosComponent } from './list-materiels-studios.component';

describe('ListMaterielsStudiosComponent', () => {
  let component: ListMaterielsStudiosComponent;
  let fixture: ComponentFixture<ListMaterielsStudiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMaterielsStudiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMaterielsStudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

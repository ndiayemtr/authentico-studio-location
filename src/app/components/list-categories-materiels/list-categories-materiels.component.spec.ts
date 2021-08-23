import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCategoriesMaterielsComponent } from './list-categories-materiels.component';

describe('ListCategoriesMaterielsComponent', () => {
  let component: ListCategoriesMaterielsComponent;
  let fixture: ComponentFixture<ListCategoriesMaterielsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCategoriesMaterielsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCategoriesMaterielsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

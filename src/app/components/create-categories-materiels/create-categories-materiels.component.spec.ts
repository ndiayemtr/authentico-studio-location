import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCategoriesMaterielsComponent } from './create-categories-materiels.component';

describe('CreateCategoriesMaterielsComponent', () => {
  let component: CreateCategoriesMaterielsComponent;
  let fixture: ComponentFixture<CreateCategoriesMaterielsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCategoriesMaterielsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCategoriesMaterielsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

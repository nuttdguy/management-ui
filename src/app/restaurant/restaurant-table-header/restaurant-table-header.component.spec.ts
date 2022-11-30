import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantTableHeaderComponent } from './restaurant-table-header.component';

describe('RestaurantTableHeaderComponent', () => {
  let component: RestaurantTableHeaderComponent;
  let fixture: ComponentFixture<RestaurantTableHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantTableHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

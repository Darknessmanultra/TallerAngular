import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductManagementComponent } from './admin-product-management.component';

describe('AdminProductManagementComponent', () => {
  let component: AdminProductManagementComponent;
  let fixture: ComponentFixture<AdminProductManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminProductManagementComponent]
    });
    fixture = TestBed.createComponent(AdminProductManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

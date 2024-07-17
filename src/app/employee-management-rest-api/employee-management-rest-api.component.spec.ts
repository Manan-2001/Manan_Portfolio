import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeManagementRestAPIComponent } from './employee-management-rest-api.component';

describe('EmployeeManagementRestAPIComponent', () => {
  let component: EmployeeManagementRestAPIComponent;
  let fixture: ComponentFixture<EmployeeManagementRestAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeManagementRestAPIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeManagementRestAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

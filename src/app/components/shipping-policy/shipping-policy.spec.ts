import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingPolicy } from './shipping-policy';

describe('ShippingPolicy', () => {
  let component: ShippingPolicy;
  let fixture: ComponentFixture<ShippingPolicy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShippingPolicy],
    }).compileComponents();

    fixture = TestBed.createComponent(ShippingPolicy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

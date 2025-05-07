import { TestBed } from '@angular/core/testing';
import type { ComponentFixture } from '@angular/core/testing';

import { HumoristicConverterComponent } from './humoristic-converter.component';

describe('HumoristicConverterComponent', () => {
  let component: HumoristicConverterComponent;
  let fixture: ComponentFixture<HumoristicConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HumoristicConverterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HumoristicConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

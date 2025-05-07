import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { OriginalConverterComponent } from './original-converter.component';

describe('OriginalConverterComponent', () => {
  let component: OriginalConverterComponent;
  let fixture: ComponentFixture<OriginalConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OriginalConverterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OriginalConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

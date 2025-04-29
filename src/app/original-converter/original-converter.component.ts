import { NgFor, NgIf } from '@angular/common';
import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-original-converter',
  imports: [RouterLink, NgIf, NgFor, FormsModule],
  templateUrl: './original-converter.component.html',
  styleUrls: [
    './original-converter.component.css',
    '../converter/converter.component.css',
  ],
})
export class OriginalConverterComponent {
  inputValue = 0;
  selectedInputUnit = '';
  selectedOutputUnit = '';
  convertedValue = 0;

  inputUnits = [
    { name: 'Âge', value: 'ans' },
    { name: 'Distance', value: 'pieds' },
    { name: 'Poids', value: 'éléphants' },
    { name: 'Vitesse', value: 'animal' },
  ];

  outputUnits = [
    { name: 'Guépard', value: 'guépard' },
    { name: 'Tortue', value: 'tortue' },
  ];

  isAgeSelected(): boolean {
    return this.selectedInputUnit === 'ans';
  }

  isWeightSelected(): boolean {
    return this.selectedInputUnit === 'éléphants';
  }

  isDistanceSelected(): boolean {
    return this.selectedInputUnit === 'pieds';
  }

  isSpeedSelected(): boolean {
    return this.selectedInputUnit === 'animal';
  }

  convert(value: number): void {
    if (this.isSpeedSelected()) {
      if (this.selectedOutputUnit === 'guépard') {
        this.convertedValue = value / 100;
      } else if (this.selectedOutputUnit === 'tortue') {
        this.convertedValue = value / 0.3;
      }
    }
    if (this.isDistanceSelected()) {
      this.convertedValue = value * 3.2808;
    }
    if (this.isWeightSelected()) {
      this.convertedValue = value / 5000;
    }
    if (this.isAgeSelected()) {
      if (value <= 0) {
        this.convertedValue = 0;
      } else if (value === 1) {
        this.convertedValue = 15;
      } else if (value === 2) {
        this.convertedValue = 24;
      } else if (value > 2) {
        this.convertedValue = 24 + (value - 2) * 4;
      }
    }
  }
}

import { NgFor, NgIf } from '@angular/common';
import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-original-converter',
  imports: [RouterLink, FormsModule],
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
  convertedValue: number | null = null;

  inputUnits = [
    { id: 1, name: 'Âge', value: 'ans' },
    { id: 2, name: 'Distance', value: 'pieds' },
    { id: 3, name: 'Poids', value: 'éléphants' },
    { id: 4, name: 'Vitesse', value: 'animal' },
  ];

  outputUnits = [
    { id: 1, name: 'Guépard', value: 'guépard' },
    { id: 2, name: 'Tortue', value: 'tortue' },
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
        this.convertedValue = Number.parseFloat((value / 0.3).toFixed(2));
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

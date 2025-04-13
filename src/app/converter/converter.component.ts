import { NgForOf, NgIf } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-converter',
  imports: [RouterLink, FormsModule, NgIf, NgForOf],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.css',
})
export class ConverterComponent {
  isDistanceChecked = false;
  isWeightChecked = false;
  isTemperatureChecked = false;
  selectedInputUnit = '';
  selectedOutputUnit = '';
  inputValue = 0;
  convertedValue = 0;
  units: { name: string; value: string; coefficient: number }[] = [];

  convert(value: number): void {
    const from = this.units.find(
      (unit) => unit.value === this.selectedInputUnit
    );
    const to = this.units.find(
      (unit) => unit.value === this.selectedOutputUnit
    );
    if (from && to) {
      if (this.isTemperatureChecked) {
        if (from.value === 'C' && to.value === 'F') {
          this.convertedValue = (value * 9) / 5 + 32;
        } else if (from.value === 'F' && to.value === 'C') {
          this.convertedValue = ((value - 32) * 5) / 9;
        } else if (from.value === 'C' && to.value === 'K') {
          this.convertedValue = value + 273.15;
        } else if (from.value === 'K' && to.value === 'C') {
          this.convertedValue = value - 273.15;
        } else if (from.value === 'F' && to.value === 'K') {
          this.convertedValue = ((value - 32) * 5) / 9 + 273.15;
        } else if (from.value === 'K' && to.value === 'F') {
          this.convertedValue = ((value - 273.15) * 9) / 5 + 32;
        } else {
          this.convertedValue = value;
        }
      } else if (this.isDistanceChecked || this.isWeightChecked) {
        this.convertedValue = (value * from.coefficient) / to.coefficient;
      } else {
        console.error('Unité non reconnue');
      }
    }
  }

  onCheckboxChange(changed: 'distance' | 'weight' | 'temperature') {
    if (changed === 'distance') {
      this.isDistanceChecked = true;
      this.isWeightChecked = false;
      this.isTemperatureChecked = false;

      this.units = [
        { name: 'Kilomètre', value: 'km', coefficient: 1000 },
        { name: 'Mètre', value: 'm', coefficient: 1 },
        { name: 'Centimètre', value: 'cm', coefficient: 0.01 },
        { name: 'Millimètre', value: 'mm', coefficient: 0.001 },
        { name: 'Pouce', value: 'in', coefficient: 0.0254 },
        { name: 'Pied', value: 'ft', coefficient: 0.3048 },
        { name: 'Mille', value: 'mi', coefficient: 1609.34 },
        { name: 'Yard', value: 'yd', coefficient: 0.9144 },
        { name: 'Mille marin', value: 'nmi', coefficient: 1852 },
      ];
    } else if (changed === 'weight') {
      this.isDistanceChecked = false;
      this.isWeightChecked = true;
      this.isTemperatureChecked = false;

      this.units = [
        { name: 'Kilogramme', value: 'kg', coefficient: 1 },
        { name: 'Gramme', value: 'g', coefficient: 0.001 },
        { name: 'Milligramme', value: 'mg', coefficient: 0.000001 },
        { name: 'Livre', value: 'lb', coefficient: 0.453592 },
        { name: 'Once', value: 'oz', coefficient: 0.0283495 },
        { name: 'Tonne', value: 't', coefficient: 1000 },
      ];
    } else if (changed === 'temperature') {
      this.isDistanceChecked = false;
      this.isWeightChecked = false;
      this.isTemperatureChecked = true;

      this.units = [
        { name: 'Celsius', value: 'C', coefficient: 1 },
        { name: 'Fahrenheit', value: 'F', coefficient: 1.8 },
        { name: 'Kelvin', value: 'K', coefficient: 1 },
      ];
    }
  }
}

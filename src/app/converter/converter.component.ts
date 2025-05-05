import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-converter',
  imports: [RouterLink, FormsModule],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.css',
})
export class ConverterComponent {
  isDistanceChecked = false;
  isWeightChecked = false;
  isTemperatureChecked = false;
  isCurrencyChecked = false;
  selectedInputUnit = '';
  selectedOutputUnit = '';
  inputValue = 0;
  convertedValue: number | null = null;
  units: { id: number; name: string; value: string; coefficient: number }[] =
    [];

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
          this.convertedValue = Number.parseFloat(
            ((value * 9) / 5 + 32).toFixed(2)
          );
        } else if (from.value === 'F' && to.value === 'C') {
          this.convertedValue = Number.parseFloat(
            (((value - 32) * 5) / 9).toFixed(2)
          );
        } else if (from.value === 'C' && to.value === 'K') {
          this.convertedValue = value + 273.15;
        } else if (from.value === 'K' && to.value === 'C') {
          this.convertedValue = value - 273.15;
        } else if (from.value === 'F' && to.value === 'K') {
          this.convertedValue = Number.parseFloat(
            (((value - 32) * 5) / 9 + 273.15).toFixed(2)
          );
        } else if (from.value === 'K' && to.value === 'F') {
          this.convertedValue = Number.parseFloat(
            (((value - 273.15) * 9) / 5 + 32).toFixed(2)
          );
        } else {
          this.convertedValue = value;
        }
      } else if (this.isDistanceChecked || this.isWeightChecked) {
        this.convertedValue = Number.parseFloat(
          ((value * from.coefficient) / to.coefficient).toFixed(2)
        );
      } else if (this.isCurrencyChecked) {
        this.convertedValue = Number.parseFloat(
          ((value * from.coefficient) / to.coefficient).toFixed(2)
        );
      } else {
        console.error('Unité non reconnue');
      }
    }
  }

  onCheckboxChange(
    changed: 'distance' | 'weight' | 'temperature' | 'currency'
  ) {
    if (changed === 'distance') {
      this.isDistanceChecked = true;
      this.isWeightChecked = false;
      this.isTemperatureChecked = false;
      this.isCurrencyChecked = false;

      this.units = [
        { id: 1, name: 'Kilomètre', value: 'km', coefficient: 1000 },
        { id: 2, name: 'Mètre', value: 'm', coefficient: 1 },
        { id: 3, name: 'Centimètre', value: 'cm', coefficient: 0.01 },
        { id: 4, name: 'Millimètre', value: 'mm', coefficient: 0.001 },
        { id: 5, name: 'Pouce', value: 'in', coefficient: 0.0254 },
        { id: 6, name: 'Pied', value: 'ft', coefficient: 0.3048 },
        { id: 7, name: 'Mille', value: 'mi', coefficient: 1609.34 },
        { id: 8, name: 'Yard', value: 'yd', coefficient: 0.9144 },
        { id: 9, name: 'Mille marin', value: 'nmi', coefficient: 1852 },
      ];
    } else if (changed === 'weight') {
      this.isDistanceChecked = false;
      this.isWeightChecked = true;
      this.isTemperatureChecked = false;
      this.isCurrencyChecked = false;
      this.units = [
        { id: 1, name: 'Kilogramme', value: 'kg', coefficient: 1 },
        { id: 2, name: 'Gramme', value: 'g', coefficient: 0.001 },
        { id: 3, name: 'Milligramme', value: 'mg', coefficient: 0.000001 },
        { id: 4, name: 'Livre', value: 'lb', coefficient: 0.453592 },
        { id: 5, name: 'Once', value: 'oz', coefficient: 0.0283495 },
        { id: 6, name: 'Tonne', value: 't', coefficient: 1000 },
      ];
    } else if (changed === 'temperature') {
      this.isDistanceChecked = false;
      this.isWeightChecked = false;
      this.isTemperatureChecked = true;
      this.isCurrencyChecked = false;

      this.units = [
        { id: 1, name: 'Celsius', value: 'C', coefficient: 1 },
        { id: 2, name: 'Fahrenheit', value: 'F', coefficient: 1.8 },
        { id: 3, name: 'Kelvin', value: 'K', coefficient: 1 },
      ];
    } else if (changed === 'currency') {
      this.isDistanceChecked = false;
      this.isWeightChecked = false;
      this.isTemperatureChecked = false;
      this.isCurrencyChecked = true;

      this.units = [
        { id: 1, name: 'Euro', value: 'EUR', coefficient: 1 },
        { id: 2, name: 'Dollar américain', value: 'USD', coefficient: 0.86 },
        { id: 3, name: 'Livre sterling', value: 'GBP', coefficient: 1.17 },
        { id: 4, name: 'Yen japonais', value: 'JPY', coefficient: 0.0077 },
        { id: 5, name: 'Franc suisse', value: 'CHF', coefficient: 1.09 },
      ];
    }
  }
}

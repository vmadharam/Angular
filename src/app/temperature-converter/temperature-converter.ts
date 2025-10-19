import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-temperature-converter',
  imports: [FormsModule,CommonModule],
  templateUrl: './temperature-converter.html',
  styleUrls: ['./temperature-converter.scss']
})
export class TemperatureConverterComponent {
  fahrenheit: number | null = null;
  celsius: number | null = null;

  convertToCelsius() {
    if (this.fahrenheit !== null) {
      this.celsius = ((this.fahrenheit - 32) * 5) / 9;
      this.celsius = parseFloat(this.celsius.toFixed(2)); // Round to 2 decimal places
    } else {
      this.celsius = null;
    }
  }
}
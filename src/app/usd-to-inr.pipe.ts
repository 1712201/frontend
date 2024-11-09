import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdToInr'
})
export class UsdToInrPipe implements PipeTransform {
  private conversionRate = 83;

  transform(value: number): string {
    const inrValue = value * this.conversionRate;
    return `₹${inrValue.toFixed(2)}`; 
  }
}


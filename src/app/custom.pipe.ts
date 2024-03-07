import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdToInr'
})
export class ConversionPipe implements PipeTransform {

  transform(value: number): number {
      const rate: number = 82.5;
      return value * rate;
  }
}

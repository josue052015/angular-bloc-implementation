import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe3'
})
export class Pipe3Pipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

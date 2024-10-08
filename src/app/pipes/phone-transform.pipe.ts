import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneTransform'
})
export class PhoneTransformPipe implements PipeTransform {

  transform(value: string): string {
    return `+${value.slice(0, 3)} (${value.slice(3, 5)}) ${value.slice(5, 8)}-${value.slice(8, 10)}-${value.slice(10, 12)}`;
  }

}

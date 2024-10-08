import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutText'
})
export class CutTextPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 95) {
      return value.slice(0, 95).trim() + '...';
    }
    return value;
  }
}

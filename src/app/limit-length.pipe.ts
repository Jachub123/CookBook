import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitLength',
})
export class LimitLengthPipe implements PipeTransform {
  transform(description: string, limit: number): string {
    return description.split('').length > limit
      ? description.substring(0, limit) + '...'
      : description;
  }
}

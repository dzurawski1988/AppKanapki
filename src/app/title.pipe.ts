// capitalize.pipe.ts

import { Pipe, PipeTrasform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTrasform {
  public transform(value: string): string {
    return value
      .split(' ')
      .map((word) => word[0].toUpperCase().concat(word.slice(1)))
      .join(' ')
  }
}

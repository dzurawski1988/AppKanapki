// capitalize.pipe.ts
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {
  public transform(value: string): string {
    return value //  'john smith'
      .split(' ') //  [ 'john', 'smith' ]
      .map((word) => word[0].toUpperCase() + word.slice(1))
      //  [ 'John', 'Smith' ]
      .join(' ') //  'John Smith'
  }
}

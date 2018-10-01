import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'anotherPipe'
})
export class AnotherPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectArray'
})
export class ObjectArrayPipe implements PipeTransform {

  transform(value: any, phrase: string = ""): any {
    if(!phrase) {
      return value;
    }

    phrase = phrase.toLocaleLowerCase();
    return value.filter( val => {
      return false;
    })
  }

}

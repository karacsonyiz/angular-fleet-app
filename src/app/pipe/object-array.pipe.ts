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
      let isOk: boolean = false;
      for (let k in val) {
        let check = val[k].toString().toLowerCase();
        if(check.indexOf(phrase) > -1) {
          isOk = true;
        }
      }
      return isOk;
    })
  }

}

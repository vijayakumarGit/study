/**
 * Created by Vk on 14/3/2017.
 */
import {Pipe} from '@angular/core';
@Pipe({
  name:'Filter',
  pure:false
})

export class filterPipe{
  transform(value:any,arg?:any,arg2?:any):any{
      if(value.length ==0)
        return value;
      let customeArry=[];

    if(arg2=='name'){
      for (let a of value)
        if(a[arg2].indexOf(arg) > -1 )
          customeArry.push(a)
      }
    else {
      for (let item of value) {
        if (item.match('^.*' + arg + '.*$')) {
          customeArry.push(item)
        }
      }
    }
      return customeArry;


  }
}


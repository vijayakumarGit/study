
/**
 * Created by Vk on 14/3/2017.
 */
import {Pipe} from '@angular/core';

@Pipe({
  name:'pureFilter'
})

export class PureFilterPipe{
  transform(value:any,arg?:any):any{
    if(value.length ==0)
      return value;
    let customeArry=[];
      for (let a of value)
        if(a.indexOf(arg) > -1 )
          customeArry.push(a)
    return customeArry;

  }
}

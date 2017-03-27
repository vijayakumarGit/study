


/**
 * Created by Vk on 27/3/2017.
 */


export class CalCulateService{
public addFun(val:any):any{
  let tot=0;
  for(let v of val){
    tot+=v.box;
  }
  return tot
}
}

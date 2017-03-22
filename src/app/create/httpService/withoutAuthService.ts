import {Headers, RequestOptions} from "@angular/http";
import {Injectable} from "@angular/core";
/**
 * Created by Vk on 22/3/2017.
 */
@Injectable()
export class nonAuthService{
  private url='http://apiv2.liad.com.au/';
    public nonAuth(path){
      let header=new Headers()
      header.append('Content-Type','application/json');
      let option=new RequestOptions({headers:header})
      return{
        url:this.url+path,
        header:option
      }

    }
}

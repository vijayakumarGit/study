import {Headers, RequestOptions} from "@angular/http";
import {Injectable} from "@angular/core";

/**
 * Created by Vk on 22/3/2017.
 */
@Injectable()

export class AuthService{
    private url='http://apiv2.liad.com.au/';
    public AuthService(path):any{
      let header=new Headers();
      header.append('Content-type','application/json')
      header.append('authorization',localStorage.getItem('auth'));
      let option=new RequestOptions({headers:header})

      return{
        url:this.url+path,
        header:option
      }

    }
}

/**
 * Created by Vk on 22/3/2017.
 */
import {AuthService} from './withAuthService'
import {nonAuthService} from './withoutAuthService'
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx'
import {Observable} from "rxjs";
@Injectable()
export class apiService{

constructor(private auth:AuthService,private NonAuth:nonAuthService,private http:Http)
{
}
   postMethodUnAuth(url,body){
        const obj=JSON.stringify(body);
      let data=this.NonAuth.nonAuth(url);
      return this.http.post(data.url,body,data.header)
              .map((res:Response)=>res.json())
  }
  postMethod(url,body){
    const obj=JSON.stringify(body);
    let data=this.auth.AuthService(url);
    return this.http.post(data.url,body,data.header)
      .map((res:Response)=>res.json())
  }
}

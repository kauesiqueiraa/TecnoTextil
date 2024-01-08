import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class CustomeInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // debugger;
    // const token = localStorage.getItem('loginToken');
    // const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InBKd3RQdWJsaWNLZXlGb3IyNTYifQ.eyJpc3MiOiJUT1RWUy1BRFZQTC1GV0pXVCIsInN1YiI6IkZSQU5DSVNDTy5NVURSSUsiLCJpYXQiOjE3MDQ0NTkxOTEsInVzZXJpZCI6IjAwMTA5NiIsImV4cCI6MTcwNDQ2Mjc5MSwiZW52SWQiOiJQUk9USEVVU19URVNURSJ9.YVQZP7X_8aUcUTsuAjMpAdoSsdQwxLgaj_sRsEE6OAnu_21-BwZG8B_UDH7JsBA_I0KV_7_H2uyyHdM7FuEKncVjtRvFaO3JnwE-xM-wmPPs9mbYpkaZRW7pH9oPsAGv-7XzHBrT8xsiJi036h1dGOQLW2yqpIjQ36jWcv5w-3swEkeP3aq73MarS9JQQ8oz5f79Z3x6GapxP__yugy6VLG539QJcCGhEObqNAwLr6_nxtnSwqbiaBk-Qf8trVFSv2R2vvsr_iNmQKp3JUazDPga8A-dJSz-6HGAuqQy4PdG9Tr3d312Gn3Cy5e1HT66XD6ATif8FjLwS36-ZO28Sw';

    // if (request.url.includes(environment.api)) {
    //   const newCloneRequest = request.clone({
    //     setHeaders:{
    //       'Authorization': `Basic QVBJX1RJOiFAI0FwaVRJIUAj`,
    //     },
    //     withCredentials: true
    //   })
    //   console.log(newCloneRequest)

    //   return next.handle(newCloneRequest);
    // }

    // const newCloneRequest = request.clone({
    //   setHeaders:{
    //     Authorization: `Bearer ${token}`
    //   }
    // })

    return next.handle(request);
  }
}

import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private localStorageService: LocalStorageService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    //we want the original request to immutable, so we clone the request and add some headers for it
    const clonedRequest = request.clone({
      setHeaders: {
        Token: `${this.localStorageService.getItem('Token')}`
      }
    });
    
    //passing control to the next interceptor in the chain, if there is any.
    return next.handle(clonedRequest);
  }
}
import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as _ from 'lodash';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CustomHttpInterceptor implements HttpInterceptor {

  constructor(private router: Router) {
  }

  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem('token');
    if (token) {
      req = this.interceptToken(req, token);
    }

    return next.handle(req)
      .pipe(
        catchError((error, caught) => {
          return throwError(error);
        })
      ) as any;
  }

  private interceptToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
    return req.clone({
        // headers: req.headers.set('Authorization', `Token ${ token }`)
      }
    );
  }

  private showErrorMessage(error: HttpErrorResponse) {
    if (error.status === 401) {
    } else if (error.status === 403) {
    } else if (error.status === 503) {
    } else if (error.status >= 400) {
    }
  }
}

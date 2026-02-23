import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, catchError, throwError } from 'rxjs';
import { finalize, map, tap } from 'rxjs/operators'

import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { IUserDTO } from './../models/iUserDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthGateway {
  endpointUrl = `${environment.apiAuthUrl}/ClientAuthentication`;
  private userSubject: BehaviorSubject<IUserDTO | null>;
  public user: Observable<IUserDTO | null>;
  isLoggedIn: boolean = false;
  private _signedOut: boolean = false;

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { 
    this.userSubject = new BehaviorSubject(JSON.parse(this.getItem('user')!));
    this.user = this.userSubject.asObservable();
  }

  get signedOut(): boolean {
    return this._signedOut;
  }
  
  set signedOut(value: boolean) {
    this._signedOut = value;
  }

  private getItem(key: string): string | null{
    if (typeof localStorage !== 'undefined') {
        return localStorage.getItem(key);
      } else if (typeof sessionStorage !== 'undefined') {
        // Fallback to sessionStorage if localStorage is not supported
        return sessionStorage.getItem(key);
      } else {
        return null;
    }

  }
  
  public get userValue() {
    return this.userSubject.value;
  }

  isLogged(): boolean {
    return false;
  }

  login(email: string, password: string){
    const url =  `${this.endpointUrl}/login`;

    return this.httpClient.post<IUserDTO>(url, { email, password})
      .pipe(
              map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                if (typeof localStorage !== 'undefined') {
                  localStorage.setItem('user', JSON.stringify(user));
                } else if (typeof sessionStorage !== 'undefined') {
                  // Fallback to sessionStorage if localStorage is not supported
                  sessionStorage.setItem('user', JSON.stringify(user));
                }
                this.userSubject.next(user);
                return user;
              }),
              tap(user => this.isLoggedIn = user.userId > 0)
            );
  }

  logout(): Observable<any> {
    // remove user from local storage and set current user to null
    // `${environment.baseURL}/LdapAuthentication/SignOutVendor`
    const url =  `${this.endpointUrl}/LocalSignOut/{PortalName}`;
    return this.httpClient.get(url)
      .pipe(
        tap(() => {
          this.cleanLocalStorage();
        }),
        finalize(() => this.signedOut = true)
    );
  }

    cleanLocalStorage() {
      if (typeof localStorage !== 'undefined') {
        localStorage.removeItem('id_token');
        localStorage.removeItem('id_rtoken');
      } else if (typeof sessionStorage !== 'undefined') {
        // Fallback to sessionStorage if localStorage is not supported
        sessionStorage.removeItem('id_token');
        sessionStorage.removeItem('id_rtoken');
      } else {
        // If neither localStorage nor sessionStorage is supported
        console.log('Web Storage is not supported in this environment.');
      }
      //this.userSubject$.next(undefined);
      //this.user = undefined;
    }
    
  // -------------------------------------------------
  //* Log and Error
  // -------------------------------------------------
  private log(response: any)
  {
    console.table(response);
  }

  private handleError(error: HttpErrorResponse, errorValue: any)
  {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return of(errorValue);
  }

  private handleHttpError(err: HttpErrorResponse) {
    let error: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', err.error.message);
      error = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${err.status}, ` +
        `body was: ${err.error}`
      );
      error = `Backend returned code ${err.status}, body was: ${err.error}`;
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.'
      + '\n'
      + error
    );
  }
}  
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Constants } from 'src/constants';
import { environment } from 'src/environments/environment';
import { Register } from '../models/register';
import { Tenant } from '../models/tenant';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<Tenant>;
  public currentUser: Observable<Tenant>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Tenant>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Tenant {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http.post<any>(`${Constants.BASE_URL}/login`, { "email": email, "password": password })
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  register(register: Register): Observable<any> {
    console.log(register);
    console.log( JSON.stringify(register));
    return this.http.post<any>(`${Constants.BASE_URL}/register`, JSON.stringify(register));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

}

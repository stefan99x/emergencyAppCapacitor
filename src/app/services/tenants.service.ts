import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Tenant } from '../models/tenant';

import { Constants } from 'src/constants';
import { Credentials } from '../models/credentials';

@Injectable({
  providedIn: 'root'
})
export class TenantsService {
  private _apiUrl: string = '/tenants'

  constructor(private http: HttpClient) { }

  getAllTenants(): Observable<Tenant[]> {
    return this.http.get<Tenant[]>(Constants.BASE_URL + this._apiUrl);
  }

  getTenant(id: string): Observable<Tenant> {
    return this.http.get<Tenant>(`${Constants.BASE_URL + this._apiUrl}/${id}`);
  }

  updateTenant(id: string, tenant: Tenant): Observable<Tenant> {
    return this.http.put<Tenant>(`${Constants.BASE_URL + this._apiUrl}/${id}`, tenant)
  }

  deleteTenant(id: string) {
    return this.http.delete(`${Constants.BASE_URL + this._apiUrl}/${id}`);
  }
}

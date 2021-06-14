import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/constants';
import { Credentials } from '../models/credentials';
import { Tenant } from '../models/tenant';
import { Injury } from '../models/injury';

@Injectable({
  providedIn: 'root'
})
export class InjuriesService {
  private _apiUrl: string = '/injuries'

  constructor(private http: HttpClient) { }

  addTenantInjury(injury: Injury): Observable<Injury> {
    console.log(injury);
    return this.http.post<Injury>(`${Constants.BASE_URL + this._apiUrl}`, injury);
  }

  getAllInjuries(): Observable<any[]> {
    return this.http.get<Injury[]>(Constants.BASE_URL + this._apiUrl);
  }

  getTenantInjuries(id: string): Observable<Injury> {
    return this.http.get<Injury>(`${Constants.BASE_URL + this._apiUrl}/${id}`);
  }

  updateInjury(id: string, injury: Injury): Observable<Injury> {
    console.log(injury);
    
    return this.http.put<Injury>(`${Constants.BASE_URL + this._apiUrl}/${id}`, injury)
  }

  deleteInjury(id: string) {
    return this.http.delete(`${Constants.BASE_URL + this._apiUrl}/${id}`);
  }
}

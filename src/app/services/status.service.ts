import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/constants';
import { Status } from '../models/status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private _apiUrl: string = '/status'
  constructor(private http: HttpClient) { }

  getAllStatusON(): Observable<Status[]>{
    return this.http.get<Status[]>(`${Constants.BASE_URL + this._apiUrl}/ON`)
  }

  getAllStatusINJURED(): Observable<Status[]>{
    return this.http.get<Status[]>(`${Constants.BASE_URL + this._apiUrl}/INJURED`)
  }

  getAllStatusUNKNOWN(): Observable<Status[]>{
    return this.http.get<Status[]>(`${Constants.BASE_URL + this._apiUrl}/UNKNOWN`)
  }

  getAllStatusNOT_IN_THE_BUILDING(): Observable<Status[]>{
    return this.http.get<Status[]>(`${Constants.BASE_URL + this._apiUrl}/NOT_IN_THE_BUILDING`)
  }

  getTenantStatus(id: string):Observable<Status>{
    return this.http.get<Status>(`${Constants.BASE_URL + this._apiUrl}/tenant/${id}`);
  }
}

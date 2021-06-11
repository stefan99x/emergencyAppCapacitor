import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/constants';

@Injectable({
  providedIn: 'root'
})

export class NearbyApiService {
  private _apiUrl: string = 'nearby-api'

  constructor(
    private http: HttpClient,
  ) {
  }

  testConection():Observable<any>{
    return this.http.get<any>(`${Constants.BASE_URL + this._apiUrl}`);
  }
}

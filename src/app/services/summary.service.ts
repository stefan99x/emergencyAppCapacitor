import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/constants';
import { Summary } from '../models/summary';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {
  private _apiUrl: string = '/summary'

constructor(private http: HttpClient) { }

  getSummary(): Observable<Summary>{
    return this.http.get<Summary>(`${Constants.BASE_URL + this._apiUrl}`)
  }

}

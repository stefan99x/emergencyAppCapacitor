import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/constants';
import { Apartment } from '../models/apartment';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  private _apiUrl: string = '/apartments'

  constructor(private http: HttpClient) { }

  addApartment(apartment: Apartment): Observable<Apartment> {
    return this.http.post<Apartment>(`${Constants.BASE_URL + this._apiUrl}`, apartment);
  }

  getAllApartments(): Observable<Apartment[]> {
    return this.http.get<Apartment[]>(`${Constants.BASE_URL + this._apiUrl}`);
  }

  getTenantApartment(id: string) {
    return this.http.get<Observable<Apartment>>(`${Constants.BASE_URL + this._apiUrl}/tenant/${id}`);
  }

  updateApartment(id: string, apartment: Apartment): Observable<Apartment> {
    console.log(apartment);
    return this.http.put<Apartment>(`${Constants.BASE_URL + this._apiUrl}/tenant/${id}`, apartment);
  }
}

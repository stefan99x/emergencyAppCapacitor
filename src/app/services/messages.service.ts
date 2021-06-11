import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/constants';
import { Apartment } from '../models/apartment';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private _apiUrl: string = '/messages'

  constructor(private http: HttpClient) { }

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(`${Constants.BASE_URL + this._apiUrl}`);
  }

  sendMessage(message: Message): Observable<Message> {
    return this.http.post<Message>(`${Constants.BASE_URL + this._apiUrl}`, message);
  }

}


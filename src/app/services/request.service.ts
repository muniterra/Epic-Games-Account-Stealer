import { Contribuinte } from './../models/Contribuinte.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  url: string = "http://localhost:3000/contribuintes";

  constructor(private httpClient: HttpClient) { }

  buscarContribuinte(id: number): Observable<Contribuinte> {
    const urlId = `${this.url}/${id}`;
    return this.httpClient.get<Contribuinte>(urlId);
  }

  buscarContribuintes(): Observable<Contribuinte[]> {
    return this.httpClient.get<Contribuinte[]>(this.url);
  }

  editarContribuinte(id: number, contribuinte: Contribuinte): Observable<Contribuinte>{
    const urlId = `${this.url}/${id}`;
    return this.httpClient.put<Contribuinte>(urlId, contribuinte);
  }

  excluirContribuinte(contribuinte: Contribuinte): Observable<Contribuinte>{
    const urlId = `${this.url}/${contribuinte.id}`;
    return this.httpClient.delete<Contribuinte>(urlId)
  }

  novoContribuinte(contribuinte: Contribuinte): Observable<Contribuinte>{
    return this.httpClient.post<Contribuinte>(this.url, contribuinte);
  }
}

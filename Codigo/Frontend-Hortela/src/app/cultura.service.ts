import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cultura } from './cultura/cultura.component';
import { Globals } from './globals/globals';

@Injectable({
  providedIn: 'root'
})
export class CulturaService {

  constructor(private http: HttpClient, private globals: Globals) { }

  getCulturas(): Observable<Cultura[]> {
    return this.http.get<Cultura[]>("http://localhost:3000/cultura", this.header());
  }

  getCultura(culturaId: number): Observable<Cultura> {
    return this.http.get<Cultura>("http://localhost:3000/cultura/" + culturaId, this.header());
  }

  adicionar(cultura: Cultura): Observable<any> {
    return this.http.post("http://localhost:3000/cultura", cultura, this.header());
  }

  editar(cultura: Cultura): Observable<any> {
    return this.http.put("http://localhost:3000/cultura/" + cultura.idcultura, cultura, this.header());
  }

  remover(culturaId: number): Observable<any> {
    return this.http.delete("http://localhost:3000/cultura/" + culturaId, this.header());
  }
  header() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.globals.loginData.token
      })
    };
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cultura } from './cultura/cultura.component';

@Injectable({
  providedIn: 'root'
})
export class CulturaService {

  constructor(private http: HttpClient) { }

  getCulturas(): Observable<Cultura[]> {
    return this.http.get<Cultura[]>("http://localhost:3000/cultura");
  }

  getCultura(culturaId: number): Observable<Cultura> {
    return this.http.get<Cultura>("http://localhost:3000/cultura/" + culturaId);
  }

  adicionar(cultura: Cultura): Observable<any> {
    return this.http.post("http://localhost:3000/cultura", cultura);
  }

  editar(cultura: Cultura): Observable<any> {
    return this.http.put("http://localhost:3000/cultura/" + cultura.idcultura, cultura);
  }

  remover(culturaId: number): Observable<any> {
    return this.http.delete("http://localhost:3000/cultura/" + culturaId);

  }
}

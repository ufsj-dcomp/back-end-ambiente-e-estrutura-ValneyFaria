import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cultura } from './cultura/cultura.component';

@Injectable({
  providedIn: 'root'
})
export class CulturaService {

  constructor(private http: HttpClient) { }

  getCulturas(): Observable<Cultura[]>{
    return this.http.get<Cultura[]>("http://localhost:3000/cultura");
  }
}

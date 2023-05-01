import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fact } from './interfaceAPI';


@Injectable({
  providedIn: 'root'
})
export class CatFactsAPIService {

  constructor(public http:HttpClient) {
  }

  getFact(): Observable<Fact>{
    return this.http.get<Fact>('https://catfact.ninja/fact');
  }
}
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DiplomeService {

  private BASE_URL = "http://localhost:8082/api/v1/diplome";
  constructor(private httpClient :HttpClient) { }

  getDiplomeRatios(): Observable<Map<string, number>>{
    return this.httpClient.get<Map<string, number>>(`${this.BASE_URL}/get/DiplomaRatios`);
  }
}

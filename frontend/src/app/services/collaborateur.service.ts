import {Injectable, Optional} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Collaborateur } from '../classes/collaborateur';
import {types} from "sass";
import List = types.List;

@Injectable({
  providedIn: 'root',
})
export class CollaborateurService {
  constructor(private httpClient: HttpClient) {}

  private BASE_URL = 'http://localhost:8082/api/v1/collaborateur';

  getAllManagerRH(): Observable<Collaborateur[]> {
    return this.httpClient.get<Collaborateur[]>(
      `${this.BASE_URL}/get/all/Managers`
    );
  }
  getNonManagerRH(): Observable<Collaborateur[]> {
    return this.httpClient.get<Collaborateur[]>(
      `${this.BASE_URL}/get/NonManagers`
    );
  }

  getNonAffectedCollabs(): Observable<Collaborateur[]> {
    return this.httpClient.get<Collaborateur[]>(
      `${this.BASE_URL}/get/nonAffectedCollabs`
    );
  }

  getMangerWithoutAcc() {
    return this.httpClient.get<Collaborateur[]>(
      `${this.BASE_URL}/get/ManagerWithoutAcc`
    );
  }

  getAllCollaborateur(): Observable<Collaborateur[]> {
    return this.httpClient.get<Collaborateur[]>(`${this.BASE_URL}/get/all`);
  }

  getCollaborateurById(id:number): Observable<Collaborateur> {
    return this.httpClient.get<Collaborateur>(`${this.BASE_URL}/get/Collaborateur/byId/${id}`);
  }

  getMaleRatio(): Observable<number> {
    return this.httpClient.get<number>(`${this.BASE_URL}/get/MaleRatio`);
  }
  getFemaleRatio(): Observable<number> {
    return this.httpClient.get<number>(`${this.BASE_URL}/get/FemaleRatio`);
  }
  getRecruitmentEvolution(): Observable<any> {
    return this.httpClient.get(`${this.BASE_URL}/getRecruitmentEvolution`);
  }

  getDiplomeRatios(): Observable<Map<string, number>> {
    return this.httpClient.get<Map<string, number>>(
      `${this.BASE_URL}/get/DiplomaRatios`
    );
  }

  getSalaryEvolutionOfCollab(id:number): Observable<any>{
    return this.httpClient.get<Map<number, number>>(`${this.BASE_URL}/SalaryEvolution/${id}`);
  }

  CalculateTurnOver(): Observable<any> {
    return this.httpClient.get(`${this.BASE_URL}/get/TurnOver/Annee`);
  }

  getTechnologies(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.BASE_URL}/get/competences/${id}`);
  }

  getSalaryEvolutions(id: number): Observable<Map<Date, number>> {
    return this.httpClient.get<Map<Date, number>>(`${this.BASE_URL}/evolution/${id}`);

  }
  getPostAPPEvolution(collaborateurId: number): Observable<Map<number, string[]>> {
    return this.httpClient.get<Map<number, string[]>>(`${this.BASE_URL}/get/EvolutionPostAPP/${collaborateurId}`);
  }

  updateCollaborateurBy3Actors(matricule: number, collaborateurDto: any): Observable<any> {
    const url = `${this.BASE_URL}/update/By3Actors?matricule=${matricule}`;
    return this.httpClient.put(url, collaborateurDto);
  }

}

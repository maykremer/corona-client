import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../environments/apiConfig';

@Injectable({
  providedIn: 'root'
})
export class ApireqsService {

  constructor(private http: HttpClient) { }

  getSuspectsByClinicId(ClinicId) {
    return this.http.get(config.BASE_URL + config.GET_SUSPECTS_BY_CLINIC_ID(ClinicId));
  }

  getAllSuspects() {
    return this.http.get(config.BASE_URL + config.GET_ALL_SUPSECTS);
  }

  updateClinicSuspect(DocumentId, body){
    return this.http.put(config.UPDATE(DocumentId), body);
  }

}

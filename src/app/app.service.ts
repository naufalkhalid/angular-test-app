import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http, Headers } from '@angular/http';

@Injectable()
export class AppService {

  constructor(private http: Http) { }

  equipments() {
    return this.http.get(`${environment.api}/equipment/search?limit=2`);
  }

  equipment(id: string) {
    return this.http.get(`${environment.api}/equipment/${id}`);
  }

  addEquipment(id: string, payload: any) {
    return this.http.post(`${environment.api}/equipment/${id}`, payload);
  }
}


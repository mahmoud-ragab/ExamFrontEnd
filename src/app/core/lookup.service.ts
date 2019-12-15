import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  private API_URL: string;
  
  constructor(private http: HttpClient) { 
    this.API_URL = "https://localhost:44354/api"
  }

  getDepartments(){
    return this.http.get(this.API_URL + "/department/getAll");
  }
}

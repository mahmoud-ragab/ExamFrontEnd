import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL: string;

  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService) {
    this.API_URL = "https://localhost:44354/api"
  }

  register(credentials) {
    let queryURL = `${this.API_URL}/User/Register`;
    return this.http.put(queryURL, credentials);
  }

  login(credentials) {
    let params = this.formulateQueryString(credentials);
    let queryURL = `${this.API_URL}/User/Login?${params}`;

    return this.http.get(queryURL);
    
    // this.http.get(queryURL, {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json'
    //   })
    // })
  }
  logout(): void{
    this.localStorageService.removeItem('UserInfo');
    this.localStorageService.removeToken('Token');
  }

  isLoggedIn(): boolean {
    return this.localStorageService.getItem('Token') ? true : false;
  }
  getUserType(): number {
    let uI = JSON.parse(this.localStorageService.getItem('UserInfo'));
    if (uI)
      return Number.parseInt(uI['Type']);
  }

  formulateQueryString(obj): string {
    let params: string[] = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key))
        params.push(`${key}=${obj[key]}`)
    }
    return params.join('&');
  }
}

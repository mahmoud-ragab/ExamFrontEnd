import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { question } from '../generate-exam/questions';

@Injectable({
  providedIn: 'root'
})
export class GenerateExamServiceService {

  httpOptions: any = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  apiUrl: string = "https://localhost:44354/api/Question";
  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }

  addExam(examPrams: any): Observable<question> {

    return this.http.post<{}>(this.apiUrl, examPrams, this.httpOptions)
      .pipe(
        catchError(this.handleError('addSmartphone', examPrams))
      );
  }

  getCoursesOfIntructor(id: Number) {
    var apiUrl = "https://localhost:44354/api/Instructor/"+id+"/courses";
    return this.http.get(apiUrl);
  }
}

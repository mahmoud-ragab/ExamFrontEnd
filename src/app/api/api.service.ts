import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//base url
const URL = "https://localhost:44354/"


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  getInstructorCourseList(id){
    return this.http.get(URL+`api/Instructor/${id}/courses`)
  }
  getInstructorCourseExamList(id,cid){
    return this.http.get(URL+`api/Instructor/${id}/course/${cid}/exams`)
  }
  getInstructorCourseExamAnswerSheetList(id,cid,eid,sid){
    return this.http.get(URL+`api/Instructor/${id}/course/${cid}/exam/${eid}/student/${sid}/modelanswer`)
  }
}

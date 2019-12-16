import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//base url
const URL = "https://localhost:44354/"
//get instructor courses
const instructor_COURSES_URL = "api/instructor/1/courses";
//get instructor exams of course
const instructor_EXAM_OF_COURSES = "api/Instructor/:id/:cid/exams"
//get instructor Answer Sheet list of exam
const instructor_AnswerSheet_OF_EXAM = "api/Instructor/:id/exam/:eid"


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  getInstructorCourseList(){
    console.log(URL+instructor_COURSES_URL)
    debugger;
    return this.http.get(URL+instructor_COURSES_URL)
  }
  getInstructorCourseExamList(id,cid){
    return this.http.get(URL+`api/Instructor/${id}/${cid}/exams`)
  }
  getInstructorCourseExamAnswerSheetList(){
    return this.http.get(URL+instructor_AnswerSheet_OF_EXAM)
  }
}
